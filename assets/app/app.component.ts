import {Component} from '@angular/core';
import {MessageComponent} from './messages/message.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    directives: [MessageComponent]
})
export class AppComponent {
  message = {
    content: "Hey, D Dogg Diggity Dogg Daddy Daddy Dogg Dogg",
    author: "Devin"
  }
}
