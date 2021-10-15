import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
