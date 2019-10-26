import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProtocolActComponent } from './protocol-act/protocol-act.component';
import { TeacherscontrolComponent } from './teacherscontrol/teacherscontrol.component';
import { UserscontrolComponent } from './userscontrol/userscontrol.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
}, {
  path: 'protocol',
  component: ProtocolActComponent
},{
  path: 'teacherscontrol',
  component: TeacherscontrolComponent
},
{
  path: 'userscontrol',
  component: UserscontrolComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  ProtocolActComponent,
  TeacherscontrolComponent,
  UserscontrolComponent
]
