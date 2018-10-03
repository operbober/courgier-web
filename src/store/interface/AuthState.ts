import {AuthUser} from './AuthUser';

export interface AuthState {
    error: string | null,
    loading: boolean,
    loggedIn: boolean,
    user: AuthUser | null,
    firebaseInitialized: boolean
}
