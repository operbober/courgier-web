import {combineEpics} from 'redux-observable';
import authEpic from './auth/epic';
import devicesEpic from './device/epic';

export const rootEpic = combineEpics(
    authEpic,
    devicesEpic,
);
