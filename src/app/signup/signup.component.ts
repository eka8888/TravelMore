import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name!:string;
  surname!:string;
  email!:string;
  password!:string;

  constructor(public auth: AngularFireAuth) { } 

  ngOnInit(): void {
  }

  signup(){
    console.log(`
    email:${this.email}
    password: ${this.password}
    name:${this.name}
    surname:${this.surname}
    `);
    this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(error=>console.log(error.code)).then(result=>console.log(result))
    
  }

}
