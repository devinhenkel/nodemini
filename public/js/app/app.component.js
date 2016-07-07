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
        this.messages = [
            new message_1.Message('Flibbity floo! Deep Dudu!!!', null, 'D Dogg'),
            new message_1.Message('What up, D Dogg Diggity Dogg Daddy Daddy Dogg Dogg', null, 'Klumpy'),
            new message_1.Message("I'm not going to spy on you", null, 'Deep Dudu'),
            new message_1.Message('Have you ever seen the rain?', null, 'John Fogarty')
        ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQUM5RCx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQVEzQztJQUFBO1FBQ0UsYUFBUSxHQUFhO1lBQ25CLElBQUksaUJBQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBQzFELElBQUksaUJBQU8sQ0FBQyxvREFBb0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBQ2pGLElBQUksaUJBQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1lBQzdELElBQUksaUJBQU8sQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDO1NBQ2xFLENBQUE7SUFDSCxDQUFDO0lBYkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDakMsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIG1lc3NhZ2VzOk1lc3NhZ2VbXSA9IFtcbiAgICBuZXcgTWVzc2FnZSgnRmxpYmJpdHkgZmxvbyEgRGVlcCBEdWR1ISEhJywgbnVsbCwgJ0QgRG9nZycpLFxuICAgIG5ldyBNZXNzYWdlKCdXaGF0IHVwLCBEIERvZ2cgRGlnZ2l0eSBEb2dnIERhZGR5IERhZGR5IERvZ2cgRG9nZycsIG51bGwsICdLbHVtcHknKSxcbiAgICBuZXcgTWVzc2FnZShcIkknbSBub3QgZ29pbmcgdG8gc3B5IG9uIHlvdVwiLCBudWxsLCAnRGVlcCBEdWR1JyksXG4gICAgbmV3IE1lc3NhZ2UoJ0hhdmUgeW91IGV2ZXIgc2VlbiB0aGUgcmFpbj8nLCBudWxsLCAnSm9obiBGb2dhcnR5JylcbiAgXVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
