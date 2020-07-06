import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private subscription: Subscription;
  loginStatus: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit() {

// subscribe to router event
this.subscription = this.activatedRoute.queryParams.subscribe(
  (param: any) => {
     this.loginStatus = param['loginStatus'];   
  });      
}
}
