import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'isLoggedIn';

  login(email: string, password: string): boolean {
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem(this.TOKEN_KEY, 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) === 'true';
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}