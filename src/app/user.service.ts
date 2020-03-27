import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("https://api.github.com/users");
  }

  searchUser(query) {
     return this.http.get(`https://api.github.com/search/users?q=${query}`);
  }
}
