import { UIActionTypes } from './../actions/ui.actions';
import { UIActions } from '../actions/ui.actions';

export interface State {
  isLoading: boolean;
}

const intialState: State = {
  isLoading: false,
};

export function uiReducer(state = intialState, action: UIActions) {
  switch (action.type) {
    case UIActionTypes.startLoading:
      return {
        isLoading: true,
      };
    case UIActionTypes.stopLoading:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
