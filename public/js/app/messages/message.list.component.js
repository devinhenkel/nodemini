"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var message_component_1 = require("./message.component");
var message_1 = require("./message");
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message('Flibbity floo! Deep Dudu!!!', null, 'D Dogg'),
            new message_1.Message('What up, D Dogg Diggity Dogg Daddy Daddy Dogg Dogg', null, 'Klumpy'),
            new message_1.Message("I'm not going to spy on you", null, 'Deep Dudu'),
            new message_1.Message('Have you ever seen the rain?', null, 'John Fogarty')
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-list',
            templateUrl: 'message.list.template.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UubGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFRbEM7SUFBQTtRQUNFLGFBQVEsR0FBYTtZQUNuQixJQUFJLGlCQUFPLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUMxRCxJQUFJLGlCQUFPLENBQUMsb0RBQW9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUNqRixJQUFJLGlCQUFPLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztZQUM3RCxJQUFJLGlCQUFPLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQztTQUNsRSxDQUFDO0lBQ0osQ0FBQztJQWJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDL0IsQ0FBQzs7NEJBQUE7SUFRRiwyQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksNEJBQW9CLHVCQU9oQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ21lc3NhZ2UubGlzdC50ZW1wbGF0ZS5odG1sJyxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgbWVzc2FnZXM6TWVzc2FnZVtdID0gW1xuICAgIG5ldyBNZXNzYWdlKCdGbGliYml0eSBmbG9vISBEZWVwIER1ZHUhISEnLCBudWxsLCAnRCBEb2dnJyksXG4gICAgbmV3IE1lc3NhZ2UoJ1doYXQgdXAsIEQgRG9nZyBEaWdnaXR5IERvZ2cgRGFkZHkgRGFkZHkgRG9nZyBEb2dnJywgbnVsbCwgJ0tsdW1weScpLFxuICAgIG5ldyBNZXNzYWdlKFwiSSdtIG5vdCBnb2luZyB0byBzcHkgb24geW91XCIsIG51bGwsICdEZWVwIER1ZHUnKSxcbiAgICBuZXcgTWVzc2FnZSgnSGF2ZSB5b3UgZXZlciBzZWVuIHRoZSByYWluPycsIG51bGwsICdKb2huIEZvZ2FydHknKVxuICBdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
