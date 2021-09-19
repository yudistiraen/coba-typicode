import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output() onLogin: EventEmitter<any> = new EventEmitter()
  email = '';
  password = '';
  constructor(
    private loginServices: LoginService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('onsubmit', this.email, this.password)
    if(this.email === '' || this.password === ''){
      alert('Isi email dan password');
      return;
    };
    let payload = {
      email : this.email,
      password: this.password
    }
    try {
      this.loginServices.login(payload).subscribe((result) => {
        if(result){
          localStorage.setItem('email', this.email);
          this.router.navigate(['/dashboard']);
        }
      });
    } catch (err) {
      alert(err)
    }
    
  }
}
