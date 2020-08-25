import {
  AuthActions,
  SET_AVAILABLE_TRAININGS,
  SET_FINISHED_TRAININGS,
  START_ACTIVE_TRAINING,
  STOP_ACTIVE_TRAINING,
} from './training.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';

export interface TrainingState {
  availableExercises: Exercise[];
  finishedExercises: Exercise[];
  activeTraining: Exercise;
}

export interface State extends fromRoot.State {
  training: TrainingState;
}

const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTraining: null,
};

export function trainingReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AVAILABLE_TRAININGS:
      return {
        ...state,
        availableExercises: action.payload,
      };
    case SET_FINISHED_TRAININGS:
      return {
        ...state,
        finishedExercises: action.payload,
      };
    case START_ACTIVE_TRAINING:
      return {
        ...state,
        activeTraining: {
          ...state.availableExercises.find((ex) => ex.id === action.payload),
        },
      };
    case STOP_ACTIVE_TRAINING:
      return {
        ...state,
        activeTraining: null,
      };
    default:
      return state;
  }
}

export const getTraingingState = createFeatureSelector<TrainingState>(
  'training'
);

export const getAvailableTraining = createSelector(
  getTraingingState,
  (state: TrainingState) => state.availableExercises
);
export const getFinishedExercises = createSelector(
  getTraingingState,
  (state: TrainingState) => state.finishedExercises
);
export const getActiveExercise = createSelector(
  getTraingingState,
  (state: TrainingState) => state.activeTraining
);
export const getIsTraining = createSelector(
  getTraingingState,
  (state: TrainingState) => state.activeTraining != null
);
