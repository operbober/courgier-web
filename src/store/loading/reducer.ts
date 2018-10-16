import {LoadingState} from './LoadingState';

export const loadingReducer = (state: LoadingState = {}, {loading}: {loading: any}) => {
    if (loading) {
        if (Array.isArray(loading)) {
            const [action, isLoading] = loading;
            loading = {[action]: isLoading};
        }
        return {...state, ...loading}
    }
    return state;
};
