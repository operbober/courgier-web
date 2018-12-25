export interface PollState {
    ids: string[]
    polls: {[id: string]: Poll}
}
