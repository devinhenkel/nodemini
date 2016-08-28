///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HTTP_PROVIDERS } from "@angular/http";
import { provide } from "@angular/core";

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";
import { AuthService } from "./auth/auth.service";
import { FamilyService } from "./family/family.service";

bootstrap(AppComponent, [MessageService, AuthService, FamilyService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);
