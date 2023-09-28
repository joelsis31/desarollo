import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigate(['/Inicio'])
  }


}
