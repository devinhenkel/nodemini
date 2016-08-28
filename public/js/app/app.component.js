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
var router_1 = require("@angular/router");
var messages_component_1 = require("./messages/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var family_component_1 = require("./family/family.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '/family', component: family_component_1.FamilyComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsMkJBRWhDLENBQUMsQ0FGMEQ7QUFpQjNEO0lBQUE7SUFFQSxDQUFDO0lBakJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw2SUFLVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7U0FDbkQsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7U0FDaEQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmFtaWx5Q29tcG9uZW50IH0gZnJvbSBcIi4vZmFtaWx5L2ZhbWlseS5jb21wb25lbnRcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF1cbn0pXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IE1lc3NhZ2VzQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hdXRoJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvZmFtaWx5JywgY29tcG9uZW50OiBGYW1pbHlDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
