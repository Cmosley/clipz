import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable  } from 'rxjs';
import { map, delay } from 'rxjs/operators'
import IUser from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  public isAuthenticatedwithDelay$: Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.usersCollection = db.collection('users')
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
    this.isAuthenticatedwithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password not provided!');
    }
    // https://firebase.google.com/docs/reference/js/auth#createuserwithemailandpassword
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCred.user) {
      throw new Error('User not found');
    }

    await this.usersCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });

    await userCred.user.updateProfile({
      displayName: userData.name,
    });
  }
}
