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
var common_1 = require("@angular/common");
var auth_service_1 = require("./auth.service");
var user_1 = require("./user");
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        console.log(user);
        this._authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignupComponent.prototype.isEmail = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return { invalidMail: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Mail</label>\n                    <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpGLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQTZCNUI7SUFHSSx5QkFBb0IsR0FBZSxFQUFVLFlBQXdCO1FBQWpELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFHLENBQUM7SUFFekUsa0NBQVEsR0FBUjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzNCLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQTtJQUNQLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDM0IsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixJQUFJLENBQUMsT0FBTztpQkFDZixDQUFDLENBQUM7WUFDSCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGlDQUFPLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SUFBdUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoSyxNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUF6REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDZ4Q0FzQlQ7U0FDSixDQUFDOzt1QkFBQTtJQWlDRixzQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksdUJBQWUsa0JBZ0MzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSkge31cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5teUZvcm0udmFsdWUuZW1haWwsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkLCB0aGlzLm15Rm9ybS52YWx1ZS5maXJzdE5hbWUsIHRoaXMubXlGb3JtLnZhbHVlLmxhc3ROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
