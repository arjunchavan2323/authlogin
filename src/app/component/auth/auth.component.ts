import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import{AngularFirestore}from'@angular/fire/compat/firestore'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
allreadyhaveaccount:boolean=false
  constructor(private _authservice :AuthService,
    private _angfirestore :AngularFirestore,
    private _router :Router
  ) { }

  ngOnInit(): void {
    const userRole=localStorage.getItem('userRole')
    if(userRole){
      if(userRole.includes('student')){
        this._router.navigate(['/studentdashbord'])
       }if(userRole.includes('teacher')){
         this._router.navigate(['/teacherdashbord'])
        }
    }
  }
  onsignupform(signupform:NgForm){
   if(signupform.valid){
    console.log(signupform.value)
    let{email, password, userRole}=signupform.value;
    this._authservice.signup(email, password)
    .then(res => {
      console.log(res)
      const uid=res.user?.uid;
this._angfirestore.collection('users').doc(uid).set({
  role:userRole
})
    })
    .catch(err => {
      console.log(err)
    })
   }
  }

  onloginform(loginform:NgForm){
   if(loginform.valid){
    let{email, password}=loginform.value;
    this._authservice.login(email, password)
    .then((res) => {
      this._authservice.loginstatus.next(true)
      console.log(res)
      const uid=res.user?.uid
 return this._angfirestore.collection('users').doc(uid).get()
 .subscribe((userDoc:any) => {
  console.log(userDoc)
  const userRole:any=userDoc.data()
  console.log(userRole)
  localStorage.setItem('userRole', userRole)
  if(userRole.role.includes('student')){
   this._router.navigate(['/studentdashbord'])
  }if(userRole.role.includes('teacher')){
    this._router.navigate(['/teacherdashbord'])
   }
 })
    })
   }
  }

}
