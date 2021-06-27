import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  email!:string;
  password!:string;

  constructor(public auth: AngularFireAuth) { } 

  ngOnInit(): void {
  }

  login(){
    console.log(`
    email:${this.email}
    password: ${this.password}`);
    this.auth.signInWithEmailAndPassword(this.email, this.password).catch(error=>console.log(error.code)).then(result=>console.log(result))
  }

}
