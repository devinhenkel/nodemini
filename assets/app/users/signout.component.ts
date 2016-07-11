import { Component } from "@angular/core";

@Component ({
  selector: 'my-signout',
  template: `
    <section class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onSignout()">Sign Out</button>
    </section>
  `
})
export class SignoutComponent {
  onLogout(){
    
  }
}
