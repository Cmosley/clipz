import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'



@Injectable()
export class EmailTaken implements AsyncValidator {
  constructor (private auth: AngularFireAuth) {}
  
  validate(control: AbstractControl) : Promise<ValidationErrors | null> {
    this.auth.fetchSignInMethodsForEmail(control.value).then(
      response => response.length ? { emailTaken: true } : null
    )
  }

}
