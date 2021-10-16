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

  clientes: Cliente = {
    name: '',
    lastName: '',
    email: '',
    id: 0,
    createAt: ''
  };

  constructor( private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    console.log("Clicked!");
    console.log(this.clientes);
  }

  public create(): void{
      // console.log("Clicked!");
      // console.log(this.clientes);

      // this.clienteService.create(this.clientes)
      //       .subscribe(data => {
      //         
      //       });
  }

}
