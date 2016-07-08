import {Component} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";

@Component({
  moduleId: module.id,
  selector: 'my-message-list',
  templateUrl: 'message.list.template.html',
  directives: [MessageComponent]
})
export class MessageListComponent {
  messages:Message[] = [
    new Message('Flibbity floo! Deep Dudu!!!', null, 'D Dogg'),
    new Message('What up, D Dogg Diggity Dogg Daddy Daddy Dogg Dogg', null, 'Klumpy'),
    new Message("I'm not going to spy on you", null, 'Deep Dudu'),
    new Message('Have you ever seen the rain?', null, 'John Fogarty')
  ];
}
