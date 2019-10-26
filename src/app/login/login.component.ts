import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private router : Router;
  constructor(inject: Injector ) {
    this.router = inject.get(Router);
   }

  ngOnInit() {
  }

  public login(){
    this.router.navigateByUrl('/teacherscontrol');
  }

}
