import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigate(['/Inicio'])
  }

  conf_roles(){
    this.router.navigate(['/conf-roles'])
  }
  
  conf_states_ur(){
    this.router.navigate(['/conf-states-ur'])
  }

  conf_state_vis(){
    this.router.navigate(['/conf-states-vis'])
  }



}
