import {
  Auth,
  GoogleAuthProvider,
  User as UserFb,
  getAuth,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import User from '../../core/user/user';
import { app } from '../config/app';

export type UserObserver = (user: User | null) => void;
export type CancelTtracking = () => void;

export class Authentication {
  private _auth: Auth;
  constructor() {
    this._auth = getAuth(app);
  }
  async loginGoogle(): Promise<User | null> {
    const response = await signInWithPopup(this._auth, new GoogleAuthProvider());
    return this.convertToUser(response.user);
  }

  async logout(): Promise<void> {
    await signOut(this._auth);
  }

  toMonitor(notify: UserObserver): CancelTtracking {
    return onIdTokenChanged(this._auth, async (userFb) => {
      const user = this.convertToUser(userFb);
      notify(user);
    });
  }

  private convertToUser(userFirebase: UserFb | null): User | null {
    if (!userFirebase?.email) {
      return null;
    }

    const altUser = userFirebase.email!.split('@')[0];
    return {
      id: userFirebase.uid,
      name: userFirebase.displayName ?? altUser,
      email: userFirebase.email,
    };
  }
}
