import {LoadingState} from './LoadingState';

export const loadingReducer = (state: LoadingState = {}, {loading}: {loading: any}) => {
    if (loading) {
        const [action, isLoading] = loading;
        return {
            ...state,
            [action]: isLoading
        }
    }
    return state;
};
