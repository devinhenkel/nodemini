import {Component} from '@angular/core';
import {MessageListComponent} from './messages/message.list.component';
import {MessageCreateComponent} from './messages/message.create.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    directives: [MessageListComponent, MessageCreateComponent]
})
export class AppComponent {

}
