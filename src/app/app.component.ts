import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'authfirebase';
  islognststus:boolean=false
  @ViewChild('sidenav1')sidenav1:any

  onclicksidenave(){
    this.sidenav1.open()
  }
constructor(private _authservice :AuthService,
  private _router :Router
){}
  ngOnInit(): void {
    this._authservice.loginstatus
    .subscribe(res => {
      this.islognststus=res
    })
  }


  onlogoutdevice(){
    this._authservice.deleteaccount()
    this._router.navigate(['/'])
  }

}
