import {LoadingState} from '../../models/LoadingState';

export const isLoading = (action: string) => (state: LoadingState) => {
    return state[action];
};
