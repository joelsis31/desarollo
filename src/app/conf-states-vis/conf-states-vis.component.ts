import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-states-vis',
  templateUrl: './conf-states-vis.component.html',
  styleUrls: ['./conf-states-vis.component.css']
})
export class ConfStatesVisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  configuraciones(){
    this.router.navigate(['/configuraciones'])
  }
}
