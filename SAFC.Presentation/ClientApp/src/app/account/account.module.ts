import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  declarations: [RegistrationFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(
      [
        { path: "account/register", component: RegistrationFormComponent }
      ])
  ]
})
export class AccountModule { }
