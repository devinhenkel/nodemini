import { Component } from "@angular/core";
import { SignupComponent } from "./signup.component";
@Component({
  moduleId: module.id,
  selector: 'my-auth',
  templateUrl: 'authentication.template.html',
  directives: [SignupComponent]
})
export class AuthenticationComponent {

}
