import {combineEpics} from 'redux-observable';
import {authEpic} from './auth/epic';
import {deviceEpic} from './device/epic';
import {metricEpic} from './metric/epic';

export const rootEpic = combineEpics(
    authEpic,
    deviceEpic,
    metricEpic,
);
