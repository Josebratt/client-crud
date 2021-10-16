import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {


  constructor( private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }


}
