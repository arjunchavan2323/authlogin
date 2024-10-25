import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _afauth :AngularFireAuth) { }

  loginstatus:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)

  signup(email:string, password:string):Promise<any>{
   return this._afauth.createUserWithEmailAndPassword(email, password)
  }


  login(email:string, password:string):Promise<any>{
    return this._afauth.signInWithEmailAndPassword(email, password)
   }


   deleteaccount(){
    this.loginstatus.next(false)
    localStorage.removeItem('userRole')
    
   }
}
