import { Component } from '@angular/core';
import { Istudent } from './models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  skills:Array<string>=["HTML","JS","TS","Angular"]

  stdArr :Array<Istudent>= [
    {
      fname:"karan",
      lname:"shitole",
      email:"karanshitole@123gmail.com",
      contact:9049826265
    },
    {
      fname:"sakshi",
      lname:"shitole",
      email:"sakshishitole@123gmail.com",
      contact:9049826265
    },
    {
      fname:"Aaru",
      lname:"shitole",
      email:"aarushitole@123gmail.com",
      contact:9049826265
    }
  ]

  PlayerName :Array<string>=["Rohit","Sachin","Rahul","Virat"];

  players :Array<Istudent>= [
    {
      fname:"Rohit",
      lname:"Sharma",
      email:"rohhit@123",
     contact:12345
    },
    {
      fname:"MS",
      lname:"Dhoni",
      email:"msdhoni@123",
      contact:12345
    },
    {
      fname:"Rahul",
      lname:"Lokesh",
      email:"rhaullokesh@123",
      contact:12345
    }
  ]
}


