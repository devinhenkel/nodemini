import {Component, OnInit} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
  moduleId: module.id,
  selector: 'my-message-list',
  templateUrl: 'message.list.template.html',
  directives: [MessageComponent]
})
export class MessageListComponent implements OnInit {

  constructor(private _messageService: MessageService) {}

  messages:Message[] = [];

  ngOnInit() {
    this.messages = this._messageService.getMessages();
  }
}
