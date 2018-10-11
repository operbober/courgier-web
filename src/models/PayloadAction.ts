import {AnyAction} from 'redux';

/*
    @template T payload type
 */
export interface PayloadAction<T> extends AnyAction {
    payload: T
}
