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
var MessageComponent = (function () {
    function MessageComponent() {
        this.editClick = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onClick = function () {
        this.editClick.emit('Flap doodle! You got a lot of nerve!');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClick", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message',
            templateUrl: 'message.template.html',
            styles: ["\n    .author {\n      display: inline-block;\n      font-style: italic;\n      font-size: 12px;\n      width: 80%;\n    }\n    .config {\n      display: inline-block;\n      text-align: right;\n      font-size: 12px;\n      width: 19%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx3QkFBc0IsV0FFdEIsQ0FBQyxDQUZnQztBQXFCakM7SUFBQTtRQUVZLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUtuRCxDQUFDO0lBSEMsa0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUxEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQXJCWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxNQUFNLEVBQUUsQ0FBQyx5UEFhUixDQUFDO1NBQ0gsQ0FBQzs7d0JBQUE7SUFRRix1QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JBQWdCLG1CQU81QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS50ZW1wbGF0ZS5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5hdXRob3Ige1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmNvbmZpZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHdpZHRoOiAxOSU7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmVkaXRDbGljay5lbWl0KCdGbGFwIGRvb2RsZSEgWW91IGdvdCBhIGxvdCBvZiBuZXJ2ZSEnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
