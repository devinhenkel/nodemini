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
var core_1 = require('@angular/core');
var message_component_1 = require('./messages/message.component');
var message_1 = require('./messages/message');
var AppComponent = (function () {
    function AppComponent() {
        this.message = new message_1.Message('Flibbity floo! Deep Dudu!!!', null, 'D Dogg');
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQUM5RCx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQVEzQztJQUFBO1FBQ0UsWUFBTyxHQUFXLElBQUksaUJBQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQVJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2pDLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBtZXNzYWdlOk1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnRmxpYmJpdHkgZmxvbyEgRGVlcCBEdWR1ISEhJywgbnVsbCwgJ0QgRG9nZycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
