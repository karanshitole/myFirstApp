import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { istd } from '../../models/student';


@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent implements OnInit {
stdArr:Array<istd>=[{
  fname:"karan",
  lname:"Shitole",
  email:"shitolekaran11@gmil.com",
  contact:9049826265
}]

//  @ViewChild("fname")fname !:ElementRef;
//  @ViewChild("lname")lname !:ElementRef;
//  @ViewChild("email")email !:ElementRef;
//  @ViewChild("contact")contact !:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
    if(fname.value&&lname.value&&email.value&&contact.value){
      let newstd:istd={
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        contact:+contact.value
      }
      console.log(newstd);
      fname.value=lname.value=email.value=contact.value=''
      this.stdArr.push(newstd)
      
    }
  }
  
}
