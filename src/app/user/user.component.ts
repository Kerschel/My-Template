import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = "kerschel";
  age:number;
  names:string[];

  constructor() { }

  ngOnInit() {
    this.names =["John Doe","Jane Doe"];

  }

}
