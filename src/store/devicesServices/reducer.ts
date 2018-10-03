import {AnyAction} from 'redux';
import {DevicesState} from 'src/store/interface/DevicesState';
import {GET_ITEMS} from './action';

const defaultState: DevicesState = {
    error: null,
    items: {},
    loading: false
};

export const devicesReducer = (state: DevicesState = defaultState, action: AnyAction): DevicesState => {
    switch (action.type) {

        case GET_ITEMS.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_ITEMS.SUCCESS: {
            return {
                ...state,
                items: action.items || {},
                loading: false,
            };
        }

        case GET_ITEMS.FAILURE: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }

        default:
            return state;
    }
};
