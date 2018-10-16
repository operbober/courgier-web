import {LoadingState} from './LoadingState';

export const isLoading = (action: string | string[]) => (state: LoadingState) => {
    if (Array.isArray(action)) {
        return action.reduce((loading, a) =>  state[a] ? true : loading, false)
    }
    return state[action];
};
