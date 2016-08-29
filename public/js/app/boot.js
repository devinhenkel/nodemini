"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
var auth_service_1 = require("./auth/auth.service");
var family_service_1 = require("./family/family.service");
var relationship_service_1 = require("./family/relationship.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService, auth_service_1.AuthService, family_service_1.FamilyService, relationship_service_1.RelationshipService, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCx1QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELCtCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELHFDQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBRXBFLG9DQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLDBDQUFtQixFQUFFLHlCQUFnQixFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZhbWlseVNlcnZpY2UgfSBmcm9tIFwiLi9mYW1pbHkvZmFtaWx5LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJlbGF0aW9uc2hpcFNlcnZpY2UgfSBmcm9tIFwiLi9mYW1pbHkvcmVsYXRpb25zaGlwLnNlcnZpY2VcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW01lc3NhZ2VTZXJ2aWNlLCBBdXRoU2VydmljZSwgRmFtaWx5U2VydmljZSwgUmVsYXRpb25zaGlwU2VydmljZSwgUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEhUVFBfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
