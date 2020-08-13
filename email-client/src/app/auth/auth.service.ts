import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SignupResponse {
  username: string;
}

interface SigninResponse {
  username: string;
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';
  signedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  username: string = '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(
      this.rootUrl + '/auth/username',
      {
        username,
      }
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http
      .post<SigninResponse>(this.rootUrl + '/auth/signin', credentials)
      .pipe(
        tap((response) => {
          this.username = response.username;
          this.signedIn$.next(true);
        })
      );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.rootUrl + '/auth/signup', credentials)
      .pipe(
        tap((response) => {
          this.username = response.username;
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<SigninResponse>(this.rootUrl + '/auth/signedin').pipe(
      tap(({ authenticated, username }) => {
        this.username = username;
        this.signedIn$.next(authenticated);
      })
    );
  }

  signout() {
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
}
