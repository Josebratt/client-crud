import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'})

  constructor( private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente: any): Observable<Cliente>{
      return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }
}
