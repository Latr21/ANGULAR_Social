import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  getCommentsByPost(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }

  // ✅ Correction de la fonction getUserMap()
  getUserMap(): Observable<Map<number, string>> {
    return this.http.get<{ id: number, name: string }[]>(`${this.apiUrl}/users`).pipe(
      map((users: { id: number, name: string }[]) => {
        const userMap = new Map<number, string>();
        users.forEach((user: { id: number, name: string }) => {
          userMap.set(user.id, user.name);
        });
        return userMap;
      })
    );
  }
}