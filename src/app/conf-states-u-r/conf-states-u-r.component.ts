import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-states-u-r',
  templateUrl: './conf-states-u-r.component.html',
  styleUrls: ['./conf-states-u-r.component.css']
})
export class ConfStatesURComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  configuraciones(){
    this.router.navigate(['/configuraciones'])
  }


}
