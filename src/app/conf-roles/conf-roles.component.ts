import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-roles',
  templateUrl: './conf-roles.component.html',
  styleUrls: ['./conf-roles.component.css']
})
export class ConfRolesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  configuraciones(){
    this.router.navigate(['/configuraciones'])
  }

}
