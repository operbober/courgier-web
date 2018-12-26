import {Poll} from '../../models/Poll';

export interface PollState {
    ids: string[]
    polls: {[id: string]: Poll}
}
