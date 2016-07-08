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
var message_1 = require("./message");
var MessageCreateComponent = (function () {
    function MessageCreateComponent() {
    }
    MessageCreateComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Dummy');
        console.log(message);
    };
    MessageCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-create',
            templateUrl: 'message.create.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MessageCreateComponent);
    return MessageCreateComponent;
}());
exports.MessageCreateComponent = MessageCreateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQVFsQztJQUFBO0lBS0EsQ0FBQztJQUpDLHlDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3RCLElBQU0sT0FBTyxHQUFXLElBQUksaUJBQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQVZIO1FBQUMsZ0JBQVMsQ0FBRTtZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw4QkFBOEI7U0FFNUMsQ0FBQzs7OEJBQUE7SUFNRiw2QkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksOEJBQXNCLHlCQUtsQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQgKHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWNyZWF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS5jcmVhdGUudGVtcGxhdGUuaHRtbCdcblxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ3JlYXRlQ29tcG9uZW50IHtcbiAgb25DcmVhdGUoY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVzc2FnZTpNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
