import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar-service.service';
@Component({
  selector: 'app-userscontrol',
  templateUrl: './userscontrol.component.html',
  styleUrls: ['./userscontrol.component.css']
})
export class UserscontrolComponent implements OnInit {

  constructor(private nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.nav.isAdmin();
  }

}
