import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor( private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
