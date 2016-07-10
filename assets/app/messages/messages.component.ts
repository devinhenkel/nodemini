import { Component } from "@angular/core";

import {MessageListComponent} from './message.list.component';
import {MessageCreateComponent} from './message.create.component';

@Component({
  moduleId: module.id,
  selector: 'my-messages',
  templateUrl: 'messages.template.html',
  directives: [MessageListComponent, MessageCreateComponent]
})
export class MessagesComponent {

}
