import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRAININGS = 'SET_AVAILABLE_TRAININGS';
export const SET_FINISHED_TRAININGS = 'SET_FINISHED_TRAININGS';
export const START_ACTIVE_TRAINING = 'START_ACTIVE_TRAINING';
export const STOP_ACTIVE_TRAINING = 'STOP_ACTIVE_TRAINING';

export class SetAvailableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class StartActiveTraining implements Action {
  readonly type = START_ACTIVE_TRAINING;

  constructor(public payload: string) {}
}

export class StopActiveTraining implements Action {
  readonly type = STOP_ACTIVE_TRAINING;
}

export type AuthActions =
  | SetAvailableTrainings
  | SetFinishedTrainings
  | StartActiveTraining
  | StopActiveTraining;
