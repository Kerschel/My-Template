import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote:string;
  constructor(private httpClient:HttpClient) {
    console.log("hi");
    this.quote="All our dreams can come true if we have the courage to pursue them. ~Walt Disney"
    httpClient.get(`http://127.0.0.1:8080/quote`)
    .subscribe(
      (data:string)=>{
        this.quote = data;
      }
    )
  }
 

  ngOnInit() {
  }
  

}
