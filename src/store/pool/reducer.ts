import {Reducer} from 'redux';
import {PayloadAction} from '../../models/PayloadAction';
import {PoolState} from '../../models/PoolState';
import {GET_POOLS} from './action';

export const poolsReducer: Reducer<PoolState, PayloadAction<{}>> = (state = {pools: []}, action) => {
    if (action.type === GET_POOLS.SUCCESS) {
        return {
            pools: action.payload
        }
    }
    return state;
};
