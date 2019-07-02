import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakiService {

  constructor(private httpclient: HttpClient) {

  }

  getUsuario() {
    return this.httpclient.get('http://localhost:3000/api/usuario');
  }
  getUsuarioById(id: Number) {
    return this.httpclient.get(`http://localhost:3000/api/usuario/${id}`);
  }
  Login(objeto): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpclient.post('http://localhost:3000/api/login', objeto , { headers });
  }
}
