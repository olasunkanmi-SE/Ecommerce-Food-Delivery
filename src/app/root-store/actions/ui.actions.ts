import { Action } from '@ngrx/store';

export enum UIActionTypes {
  startLoading = '[UI] Start Loading',
  stopLoading = '[UI] Stop Loading',
}

export class startLoading implements Action {
  readonly type = UIActionTypes.startLoading;
}

export class stopLoading implements Action {
  readonly type = UIActionTypes.stopLoading;
}

export type UIActions = startLoading | stopLoading;
