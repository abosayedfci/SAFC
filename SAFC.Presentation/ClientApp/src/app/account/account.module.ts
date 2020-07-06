import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { routing }  from './account.routing';
@NgModule({
  declarations: [RegistrationFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    routing,
    RouterModule.forChild(
      [
        { path: "account/register", component: RegistrationFormComponent },
        { path: "account/login", component: LoginFormComponent }
      ])
  ]
})
export class AccountModule { }
