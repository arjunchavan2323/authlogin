import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _router :Router,
    private _authservice:AuthService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const login=localStorage.getItem('userRole')
   if(login){
    this._authservice.loginstatus.next(true)
    return of( true)
   
   }else{
    this._router.navigate(['/'])
    return of(false)
   }
  }
  
}
