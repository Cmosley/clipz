import { FormControl } from '@angular/forms';
import { Component, OnInit,  } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  creditentials = {
    email: '',
    password: '',
  };

  constructor(private auth: AngularFireAuth) {}

  // alert properties
  showAlert = false;
  alertMessage = 'Logging into your account...';
  alertColor = 'blue';
  inSubmission = false;

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMessage = 'Logging into your account...';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.creditentials.email,
        this.creditentials.password
      );
    } catch (e) {
      this.inSubmission = false;
      this.alertMessage = 'Error: Please try again later'
      this.alertColor = 'red'
      console.log(e)
    }
    this.alertMessage = 'Success! You are now logged in'
    this.alertColor = 'green'
  }
}
