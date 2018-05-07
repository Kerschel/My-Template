import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {
  first:string[];
  second:string[];
  third:string[];

  des1:string[];
  des2:string[];
  des3:string[];

  description1:string;
  description2:string;
  description3:string;
  title1:string;
  title2:string;
  title3:string;

  url1:string;
  url2:string;
  url3:string;

  urls1:string[];
  urls2:string[];
  urls3:string[];
  counter:number;
  heading:string;

  headings:string[]
  constructor() { 
    this.first = ["Chat Application","Attendance Checker"]
    this.second = ["Banking Application","Yellow Dragon Disease"]
    this.third = ["Inventory Application","Attendance Checker"]

    this.des1 = ["UDP Chat Application built using JavaFX. Also comes with a server to manage users online. This app is for experimental purposes","Checks attendance"];
    this.des2 = ["This application simulates how a ATM machine works.I also enabled printing of cheques from the system","Checks attendance"];
    this.des3 = ["Inventory manager application that allows a retailer to sell stocks and calculate their profit like Quickbooks. It can be integrated easily with the Bank System","Checks attendance"];
   
    this.headings = ["Desktop Apps","Android Apps"];
    this.counter = 1;
    
    

    this.urls1 = ["/assets/chat.png","assets/classattend.png"];
    this.urls2 = ["https://user-images.githubusercontent.com/17114163/39091632-e4d18a9c-45c5-11e8-94ba-76afdc1297fc.PNG","/assets/yellow.png"];
    this.urls3 = ["/assets/inventory.png","/assets/homescreen.png"];
    this.title1 = this.first[0];
    this.description1 = this.des1[0];
    this.title2 = this.second[0];
    this.description2 = this.des2[0];
    this.description3 = this.des3[0];
    this.title3 = this.third[0];
    this.heading = "Desktop Apps";

    this.url1 = this.urls1[0];
    this.url2 = this.urls2[0];
    this.url3 = this.urls3[0];
  }

  ngOnInit() {
  }

  nextItems(){
    var i = this.counter % this.first.length;
    this.counter +=1;
    // this.description1= this.des1[i];
    this.title1 = this.first[i];
    // this.description2= this.des2[i];
    this.title2 = this.second[i];
    // this.description3= this.des3[i];
    this.title3 = this.third[i];
    this.heading = this.headings[i];

    this.url1 = this.urls1[i];
    this.url2 = this.urls2[i];
    this.url3 = this.urls3[i];
  }

  previousItems(){
    var i = this.counter % this.first.length;
    this.counter -=1;
    this.description1= this.des1[i];
    this.title1 = this.first[i];
    this.description2= this.des2[i];
    this.title2 = this.second[i];
    this.description3= this.des3[i];
    this.title3 = this.third[i];
    this.heading = this.headings[i];

    this.url1 = this.urls1[i];
    this.url2 = this.urls2[i];
    this.url3 = this.urls3[i];
  }

}
