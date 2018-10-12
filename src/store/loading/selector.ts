import {LoadingState} from './LoadingState';

export const isLoading = (action: string) => (state: LoadingState) => {
    return state[action];
};
