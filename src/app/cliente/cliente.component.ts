import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
      this.clienteService.getClientes()
          .subscribe( data => {
            this.clientes = data;
          });     
  }
}


