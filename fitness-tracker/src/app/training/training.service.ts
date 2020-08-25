import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { UiService } from '../shared/ui.service';
import * as fromTraining from './training.reducer';
import * as Training from './training.actions';
import * as UI from '../shared/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  public firebaseSub: Subscription[] = [];

  constructor(
    private firestore: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromTraining.State>
  ) {}

  fetchExercise() {
    this.store.dispatch(new UI.StartLoading());
    this.firebaseSub.push(
      this.firestore
        .collection<Exercise>('availableExercises')
        .snapshotChanges()
        .pipe(
          map((docData) => {
            return docData.map((doc) => {
              const response: Exercise = <Exercise>doc.payload.doc.data();
              return {
                id: doc.payload.doc.id,
                ...response,
              };
            });
          })
        )
        .subscribe(
          (data) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new Training.SetAvailableTrainings(data));
          },
          (error) => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(
              'Fetching exercises failed',
              null,
              3000
            );
          }
        )
    );
  }

  fetchExerciseHistory() {
    this.firebaseSub.push(
      this.firestore
        .collection('exercisesHistory')
        .valueChanges()
        .subscribe(
          (exercises: Exercise[]) => {
            this.store.dispatch(new Training.SetFinishedTrainings(exercises));
          },
          (error) => {
            this.uiService.showSnackbar(
              'Fetching exercises failed',
              null,
              3000
            );
          }
        )
    );
  }

  startExercise(id: string) {
    this.store.dispatch(new Training.StartActiveTraining(id));
  }

  completeExercise() {
    this.store
      .select(fromTraining.getActiveExercise)
      .pipe(take(1))
      .subscribe((exercise) => {
        this.addDataToFirestore({
          ...exercise,
          date: new Date(),
          state: 'completed',
        });
        this.store.dispatch(new Training.StopActiveTraining());
      });
  }

  cancelExercise(progress: number) {
    this.store
      .select(fromTraining.getActiveExercise)
      .pipe(take(1))
      .subscribe((exercise) => {
        this.addDataToFirestore({
          ...exercise,
          date: new Date(),
          state: 'cancelled',
          duration: exercise.duration * (progress / 100),
          calories: exercise.calories * (progress / 100),
        });
        this.store.dispatch(new Training.StopActiveTraining());
      });
  }

  cancelSubscriptions() {
    this.firebaseSub.forEach((sub) => sub.unsubscribe());
  }

  private addDataToFirestore(exercise: Exercise) {
    this.firestore.collection('exercisesHistory').add(exercise);
  }
}
