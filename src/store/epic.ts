import {combineEpics} from 'redux-observable';
import {authEpic} from './auth/epic';
import {deviceEpic} from './device/epic';

export const rootEpic = combineEpics(
    authEpic,
    deviceEpic,
);
