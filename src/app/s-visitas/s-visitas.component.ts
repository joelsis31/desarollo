import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-visitas',
  templateUrl: './s-visitas.component.html',
  styleUrls: ['./s-visitas.component.css']
})
export class SVisitasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigate(['/Inicio'])
  }

  programarVisita(){
    this.router.navigate(['/programarVisitas'])
  }

}
