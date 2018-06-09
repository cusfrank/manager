(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\n<p>This is a website for collecting user information\n</p>\n<button class=\"btn btn-dark\" routerLink=\"/users\" >Users Section</button>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark mb-4\">\n  <div class=\"container\">\n    <a routerLink='/' class=\"navbar-brand\">Angular App</a>\n    <div>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\"[routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\"[routerLinkActiveOptions]=\"{exact: true}\">\n            <a routerLink=\"users\" class=\"nav-link\">Users</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text{\r\n  text-transform: uppercase;\r\n}"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"showUserForm = !showUserForm\" class=\"btn btn-dark mb-3\">\n  Add User\n</button>\n<div class=\"card card-body mb-3\" *ngIf=\"showUserForm\">\n  <h2>\n    Add User\n  </h2>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\n    <div class=\"form-group\">\n      <label>\n        First Name\n      </label>\n      <input type=\"text\" [(ngModel)]=\"user.firstName\" [ngClass]=\"{'is-invalid':userFirstName.errors && userFirstName.touched }\"\n        class=\"form-control\" name=\"firstName\" #userFirstName=\"ngModel\" required minlength=\"2\">\n      <div [hidden]=\"!userFirstName.errors?.required\" class=\"invalid-feedback\">\n        First name required\n      </div>\n\n      <div [hidden]=\"!userFirstName.errors?.minlength\" class=\"invalid-feedback\">\n        Must be at least 2 characters\n      </div>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label>\n        Last Name\n      </label>\n      <input type=\"text\" [(ngModel)]=\"user.lastName\" [ngClass]=\"{'is-invalid':userLastName.errors && userLastName.touched }\" class=\"form-control\"\n        name=\"lastName\" #userLastName=\"ngModel\" required minlength=\"2\">\n      <div [hidden]=\"!userLastName.errors?.required\" class=\"invalid-feedback\">\n        Last name required\n      </div>\n\n      <div [hidden]=\"!userLastName.errors?.minlength\" class=\"invalid-feedback\">\n        Must be at least 2 characters\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>\n        email\n      </label>\n\n      <input type=\"email\" [(ngModel)]=\"user.email\" [ngClass]=\"{'is-invalid':userEmail.errors && userEmail.touched }\" class=\"form-control\"\n        name=\"email\" #userEmail=\"ngModel\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\n      <div [hidden]=\"!userEmail.errors?.pattern\" class=\"invalid-feedback\">\n        Email is not valid\n      </div>\n\n      <div [hidden]=\"!userEmail.errors?.minlength\" class=\"invalid-feedback\">\n        Must be at least 2 characters\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>\n        Balance\n      </label>\n      <input type=\"number\" [(ngModel)]=\"user.balance\" [ngClass]=\"{'is-invalid':userBalance.errors && userBalance.touched }\" class=\"form-control\"\n        name=\"balance\" #userBalance=\"ngModel\" required type='number'>\n\n      <div [hidden]=\"!userBalance.errors?.required\" class=\"invalid-feedback\">\n        Please give me a number\n      </div>\n    </div>\n\n    <button [disabled]=\"!userForm.form.valid\" class=\"btn btn-block mb-3\" [ngClass]=\"userForm.form.valid?currentClasses:''\">Add New User </button>\n  </form>\n</div>\n<ul class=\"list-unstyled\" *ngIf=\"loaded && users?.length > 0;else noUsers\">\n  <li class=\"card card-body mb-2\" *ngFor=\"let user of users; let i = index \"   [class.bg-light]=\"user.isActive\"\n    [style.border-color]=\"user.isActive ? 'black':'' \">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <img class=\"img-fluid\" [src]=\"user.image\" alt=\"\" (click)=\"toggleHide(user)\" (click)=\"user.updateMode = false\">\n      </div>\n      <div class=\"col-sm-8\">\n        <h3 [ngStyle]=\"user.hide?currentStyles:''\">{{ user.firstName }} {{ user.lastName}}\n          <small>\n            <button (click)=\"toggleHide(user)\" (click)=\"user.updateMode = false\" class=\"btn btn-dark btn-xl\">\n              <i [ngClass]=\"user.hide ? 'fa fa-plus': 'fa fa-minus'\"></i>\n            </button>\n          </small>\n        </h3>\n        <ul class=\"list-group\" *ngIf=\"!user.hide && !user.updateMode\">\n          <li class=\"list-group-item\">email: {{ user.email }}</li>\n          <li class=\"list-group-item\">\n            balance: {{user.balance | currency:\"CAD\":\"symbol\"}}\n          </li>\n          <!-- <li class=\"list-group-item\">\n            Joined: {{user.registered | date:\"fullDate\"}}\n          </li> -->\n          <button class=\"btn btn-success\" (click)=\"user.updateMode=!user.updateMode\">\n            Update\n          </button>\n\n          <button class=\"btn btn-danger\" (click)=\"removeUser(i)\">\n            Remove\n          </button>\n\n        </ul>\n\n        <ul class=\"list-group\" *ngIf=\"!user.hide && user.updateMode\">\n\n          <div class=\"card card-body mb-3\">\n            <h2>\n              Update Here\n            </h2>\n            <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\n              <div class=\"form-group\">\n                <label>\n                  First Name\n                </label>\n                <input type=\"text\" [(ngModel)]=\"user.firstName\" [ngClass]=\"{'is-invalid':userFirstName.errors && userFirstName.touched }\"\n                  class=\"form-control\" name=\"firstName\" #userFirstName=\"ngModel\" required minlength=\"2\">\n                <div [hidden]=\"!userFirstName.errors?.required\" class=\"invalid-feedback\">\n                  First name required\n                </div>\n\n                <div [hidden]=\"!userFirstName.errors?.minlength\" class=\"invalid-feedback\">\n                  Must be at least 2 characters\n                </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label>\n                  Last Name\n                </label>\n                <input type=\"text\" [(ngModel)]=\"user.lastName\" [ngClass]=\"{'is-invalid':userLastName.errors && userLastName.touched }\" class=\"form-control\"\n                  name=\"lastName\" #userLastName=\"ngModel\" required minlength=\"2\">\n                <div [hidden]=\"!userLastName.errors?.required\" class=\"invalid-feedback\">\n                  Last name required\n                </div>\n\n                <div [hidden]=\"!userLastName.errors?.minlength\" class=\"invalid-feedback\">\n                  Must be at least 2 characters\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>\n                  email\n                </label>\n\n                <input type=\"email\" [(ngModel)]=\"user.email\" [ngClass]=\"{'is-invalid':userEmail.errors && userEmail.touched }\" class=\"form-control\"\n                  name=\"email\" #userEmail=\"ngModel\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\n                <div [hidden]=\"!userEmail.errors?.pattern\" class=\"invalid-feedback\">\n                  Email is not valid\n                </div>\n\n                <div [hidden]=\"!userEmail.errors?.minlength\" class=\"invalid-feedback\">\n                  Must be at least 2 characters\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>\n                  Balance\n                </label>\n                <input type=\"number\" [(ngModel)]=\"user.balance\" [ngClass]=\"{'is-invalid':userBalance.errors && userBalance.touched }\" class=\"form-control\"\n                  name=\"balance\" #userBalance=\"ngModel\">\n                <div [hidden]=\"!userBalance.errors?.required\" class=\"invalid-feedback\">\n                  Balance required\n                </div>\n              </div>\n\n              <button [disabled]=\"!userForm.form.valid\" class=\"btn btn-block mb-3\" [ngClass]=\"userForm.form.valid?currentClasses:''\"\n               (click)=\"user.updateMode=!user.updateMode\"\n                (click)=\"toggleHide(user)\">Finish </button>\n            </form>\n          </div>\n\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n\n<!-- <ng-template #noUsers><h4>No Users Found</h4></ng-template> -->\n<h4 *ngIf=\"loaded && users?.length == 0\">No Users Found</h4>\n<h4 *ngIf=\"!loaded\">loading Users...</h4>"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(dataService) {
        this.dataService = dataService;
        this.user = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.showExtended = true;
        this.loaded = false;
        this.enableAdd = true;
        this.showUserForm = false;
        this.currentClasses = {};
        this.currentStyles = {};
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data) {
            console.log(data);
        });
        this.users = this.dataService.getUsers();
        setTimeout(function () {
            _this.loaded = true;
        }, 1000);
        //this.showExtended = true;
        // this.addUser({
        //   firstName:'Diana',
        //   lastName:'Lee',
        //   age:28,
        //   address:{
        //     street:'76 Edward',
        //     city:'Oakville',
        //     state:'ON'
        //   },
        //   image: 'https://picsum.photos/200/200/?random+3',
        //   isActive:true,
        //   hide:true,
        //   balance:200
        // }); 
        this.setCurrentClasses();
        this.setCurrentStyles();
    };
    // addUser() {
    //   this.user.isActive = true;
    //   this.user.registered = new Date();
    //   this.user.image =
    //   'https://picsum.photos/200/200/?random';
    //   this.users.unshift(this.user);
    //   this.user = {
    //     firstName: '',
    //     lastName: '',
    //     email: ''
    //   };
    // }
    UsersComponent.prototype.removeUser = function (index) {
        this.users.splice(index, 1);
    };
    UsersComponent.prototype.updateUser = function (index) {
        this.users[index].updateMode = !this.users[index].updateMode;
        console.log(this.users[index].updateMode);
    };
    UsersComponent.prototype.setCurrentClasses = function () {
        this.currentClasses = {
            'btn-success': this.enableAdd,
        };
    };
    UsersComponent.prototype.setCurrentStyles = function () {
        this.currentStyles = {
            'padding-top': this.user.hide ? '0' : '60px',
            'font-size': this.user.hide ? '0' : '40px'
        };
    };
    UsersComponent.prototype.fireEvent = function (e) {
        console.log(e.target.value);
        console.log(e.type);
    };
    UsersComponent.prototype.toggleHide = function (user) {
        user.hide = !user.hide;
    };
    UsersComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Form is not valid');
        }
        else {
            this.myNum = this.randomInt(this.myRdms);
            value.image =
                'https://picsum.photos/200/200/?random' + this.myNum;
            value.isActive = true;
            value.registered = new Date();
            value.hide = true;
            this.dataService.addUser(value);
            this.form.reset();
        }
    };
    UsersComponent.prototype.randomInt = function (arr) {
        if (arr === void 0) { arr = []; }
        var myNum = -1;
        while (myNum == -1) {
            var myNum = Math.floor(Math.random() * 1000000000) + 0;
            if (arr.indexOf(arr) > -1)
                continue;
        }
        return myNum;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userForm'),
        __metadata("design:type", Object)
    ], UsersComponent.prototype, "form", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.user = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.showExtended = true;
        this.loaded = false;
        this.enableAdd = true;
        this.showUserForm = false;
        this.currentClasses = {};
        this.currentStyles = {};
        this.myRdms = this.randomIntFromInterval();
        console.log('here');
        this.users = [
            {
                firstName: 'Mattew',
                lastName: 'Bred',
                email: 'mattew@email.com',
                image: 'https://picsum.photos/200/200/?random' + this.myRdms[1],
                isActive: true,
                hide: true,
                updateMode: false,
                balance: 22,
                registered: new Date('01/02/2018 08:30:00')
            },
            {
                firstName: 'Eric',
                lastName: 'Pavinton',
                email: 'eric@email.com',
                image: 'https://picsum.photos/200/200/?random' + this.myRdms[2],
                isActive: false,
                hide: true,
                updateMode: false,
                balance: 18,
                registered: new Date('03/04/2017 08:30:00')
            },
            {
                firstName: 'Jane',
                lastName: 'Field',
                email: 'jane@email.com',
                image: 'https://picsum.photos/200/200/?random' + this.myRdms[3],
                isActive: true,
                hide: true,
                updateMode: false,
                balance: 19,
                registered: new Date('02/03/2017 08:30:00')
            }
        ];
    }
    DataService.prototype.getData = function () {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(1);
            }, 1000);
            setTimeout(function () {
                observer.next(2);
            }, 2000);
            setTimeout(function () {
                observer.next(3);
            }, 3000);
            setTimeout(function () {
                observer.next(4);
            }, 4000);
        });
        return this.data;
    };
    DataService.prototype.getUsers = function () {
        console.log('Fetching users from service...');
        return this.users;
    };
    DataService.prototype.addUser = function (user) {
        this.users.unshift(user);
    };
    DataService.prototype.randomIntFromInterval = function () {
        var arr = [];
        while (arr.length < 8) {
            var randomnumber = Math.floor(Math.random() * 1000000000) + 0;
            if (arr.indexOf(randomnumber) > -1)
                continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cusfr\Projects\angularapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map