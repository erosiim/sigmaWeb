import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  adminVisible: boolean;

  constructor() {
    this.visible = false;
    this.adminVisible = false;
   }

   hide(){
     this.visible = false;
   }

   show(){
     this.visible = true;
   }

  isAdmin(){
     this.adminVisible = true;
   }
}
