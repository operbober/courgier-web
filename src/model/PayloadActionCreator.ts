import {ActionCreator} from 'redux';
import {PayloadAction} from './PayloadAction';

export interface PayloadActionCreator<T> extends ActionCreator<PayloadAction<T>>{

}
