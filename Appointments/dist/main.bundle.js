webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { ListComponent } from './list/list.component';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__new_new_component__["a" /* NewComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <br>\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sortByPipe__ = __webpack_require__("../../../../../src/app/sortByPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__items_service__ = __webpack_require__("../../../../../src/app/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sortByPipe__["a" /* sortByPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__items_service__["a" /* ItemService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.base = '/auth/';
    }
    AuthService.prototype.login = function (user) {
        return this.http.post(this.base + 'login', user)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.base + 'register', user)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    AuthService.prototype.logout = function () {
        return this.http.delete(this.base + 'logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    AuthService.prototype.currentUserID = function () {
        return this.cookieService.get('userId');
    };
    AuthService.prototype.isAuthed = function () {
        var expired = parseInt(this.cookieService.get('expiration'), 10);
        var userId = this.currentUserID();
        var session = this.cookieService.get('session');
        return Boolean(session && expired && userId && expired > Date.now());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr:nth-child(odd) {\r\n    background-color: #3ab97a6e;\r\n}\r\n\r\ntd {\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\n    <button (click)=\"logout(userId)\">Logout</button>\n</nav>\n\n<div *ngIf='errorMessages.length'>\n    <ul>\n        <li *ngFor='let error of errorMessages'> {{ error }} </li>\n    </ul>\n</div>\n<div>\n    <form (ngSubmit)=\"search($event); searchform.reset()\" #searchform=\"ngForm\">\n        <p>Search\n            <input type=\"text\" name='searchString' minlength='3' [(ngModel)]='searchString' required>\n            <button [hidden]='searchform.invalid'>Search</button></p>\n    </form>\n\n</div>\n<h3>\n    Doctor's Appointments:\n</h3>\n\n<table>\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Patient Name</th>\n            <th>Complaint</th>\n        </tr>\n    </thead>\n    <tbody *ngFor=\"let item of items | sortBy :'appdate'\">\n        <tr *ngIf=\"item.appdate >= ShowDate\">\n            <td>{{ item.appdate | date:'MMM dd, yyyy' }} </td>\n            <td>{{ item.appdate | date:\"HH:mm a\" }}</td>\n            <td>{{ item.owner['username'] }}</td>\n            <td>{{ item.complaint }}\n                <button *ngIf=\"userID == item.owner._id && item.appdate >= CancelDate\" (click)=\"delete(item._id)\"> Delete </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<br>\n<div>\n    <button [routerLink]=\"['/new']\">Create a new Appointment</button> &nbsp;&nbsp;&nbsp;\n</div>\n<!-- | date:\"HH:mm a\"  userID == item.owner._id && item.appdate >= CancelDate-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items__ = __webpack_require__("../../../../../src/app/items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_service__ = __webpack_require__("../../../../../src/app/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as moment from 'moment';
var DashboardComponent = (function () {
    function DashboardComponent(ItemService, AuthService, CookieService, Router) {
        this.ItemService = ItemService;
        this.AuthService = AuthService;
        this.CookieService = CookieService;
        this.Router = Router;
        this.items = [];
        this.item = new __WEBPACK_IMPORTED_MODULE_1__items__["a" /* Item */]();
        this.errorMessages = [];
        this.userID = null;
        this.Now = Date.now();
        this.Tomorrow = Date.now() + 86400000;
        this.CancelDate = new Date(this.Tomorrow).toISOString();
        this.Yesterday = Date.now() - 86400000;
        this.ShowDate = new Date(this.Yesterday).toISOString();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = this.CookieService.get('userId');
        console.log("logged in userID ", this.userID);
        this.ItemService.getItems()
            .subscribe(function (items) {
            _this.items = items;
            console.log("items ", _this.items);
        });
        if (!this.userID) {
            this.Router.navigate(['']);
        }
    };
    DashboardComponent.prototype.logout = function (userID) {
        var _this = this;
        this.AuthService.logout()
            .then(function () {
            _this.Router.navigate(['/home']);
        });
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this.ItemService.deleteItem(id)
            .then(function () { return console.log; });
        this.ItemService.getItems()
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    DashboardComponent.prototype.search = function (event, form) {
        event.preventDefault();
        this.searchName = this.searchString;
        console.log(this.searchString);
        this.ItemService.search(this.searchString);
        // .subscribe(searchItems=>{
        //  this.searchItem=searchItems;
        //}) 
        console.log("Appointments for " + this.searchString);
        console.log(this.searchItem);
        this.searchItem = [];
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__items_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-login></app-login>\n</div>\n<br><br><br>\n<div>\n    <app-register></app-register>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.base = '/api/items/';
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.base)
            .map(function (response) { return response.json(); });
    };
    ItemService.prototype.getItem = function (id) {
        return this.http.get("" + this.base + id)
            .map(function (response) { return response.json(); });
    };
    ItemService.prototype.getDate = function (appdate) {
        return this.http.get(this.base + "/" + appdate)
            .map(function (response) { return response.json(); });
    };
    ItemService.prototype.updateItem = function (id) {
        return this.http.get("" + this.base + id)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ItemService.prototype.addItem = function (item) {
        console.log('adding item', item);
        return this.http.post(this.base, item)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ItemService.prototype.deleteItem = function (id) {
        console.log("" + this.base + id);
        return this.http.delete("" + this.base + id)
            .map(function () { return console.log('the listing was deleted'); })
            .toPromise();
    };
    ItemService.prototype.search = function (searchString) {
        console.log("Search for " + searchString);
        return this.http.get("" + this.base + searchString)
            .map(function (response) { return response.json(); });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='loginErrors.length'>\n    <ul class=\"alert alert-danger\">\n        <li *ngFor='let error of loginErrors'> {{error}}</li>\n    </ul>\n</div>\n\n<fieldset>\n    <legend>Login</legend>\n    <form (submit)='onSubmit(login.value)' #login='ngForm' class='form-group'>\n        <div class='form-control'>\n            <label for=\"username\">Username: </label>\n            <input type=\"text\" name='username' size=\"60\" placeholder=\"Username\" #name='ngModel' [(ngModel)]='user.username' required minlength=\"2\">\n        </div>\n        <div class='form-control'>\n            <label for=\"email\">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            <input type=\"email\" name='email' size=\"60\" placeholder=\"Email\" #email='ngModel' [(ngModel)]='user.email' required minlength=\"6\">\n        </div>\n        <div class='form-control'>\n            <label for=\"password\">Password: </label>\n            <input type=\"password\" name=\"password\" size=\"60\" placeholder=\"Password\" [(ngModel)]='user.password' #password='ngModel' required minlength=\"8\" maxlength=\"25\">\n        </div>\n        <div>\n            <button *ngIf=\"login.valid\">Login</button>\n        </div>\n    </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.loginErrors = [];
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.user)
            .then(function () { return _this.router.navigate(['dashboard']); })
            .catch(function (response) { return _this.handleErrors(response.json()); });
    };
    LoginComponent.prototype.handleErrors = function (errors) {
        this.loginErrors = Array.isArray(errors) ? errors : [errors.message];
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n    New Appointment</h2>\n<form (submit)='OnSubmit($event, form)' #form=\"ngForm\">\n    <div>\n        <label for=\"appointment\">Date: </label>\n        <input type=\"date\" #appdate='ngModel' [(ngModel)]='item.appdate' name='appdate' min=\"{{ DateNow | date:'yyyy-MM-dd' }}\" required/>\n        <span>&nbsp;&nbsp;&nbsp;</span>\n        <label for=\"appointment\">Time: </label>\n        <input type=\"time\" #apptime='ngModel' [(ngModel)]='item.apptime' name='apptime' min=\"07:59\" max='17:01' required/>\n    </div>\n    <br><br>\n    <div>\n        <label for=\"complaint\">Complaint: </label>\n        <textarea cols=\"40\" rows=\"2\" [(ngModel)]='item.complaint' name='complaint' minlength='10' required></textarea>\n    </div>\n    <br><br>\n\n    <div>\n        <input type=\"hidden\" #owner='ngModel' [(ngModel)]='item.owner' name='owner' value=\"{{userID}}\">\n        <button [routerLink]=\"['/dashboard']\">Cancel</button>\n        <span>&nbsp;&nbsp;&nbsp;</span>\n\n        <button name='submit' *ngIf='form.valid'>Add Appoinment</button>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_service__ = __webpack_require__("../../../../../src/app/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items__ = __webpack_require__("../../../../../src/app/items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as moment from 'moment';
var NewComponent = (function () {
    function NewComponent(ItemService, CookieService, Router, Route) {
        this.ItemService = ItemService;
        this.CookieService = CookieService;
        this.Router = Router;
        this.Route = Route;
        this.items = [];
        this.newItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.item = new __WEBPACK_IMPORTED_MODULE_4__items__["a" /* Item */]();
        this.userID = null;
        this.Now = Date.now();
        this.DateNow = new Date(this.Now).toISOString();
    }
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = this.CookieService.get('userId');
        console.log("logged in userID ", this.userID);
        this.Now;
        this.DateNow;
        this.ItemService.getItems()
            .subscribe(function (items) {
            _this.items = items;
            console.log("items ", _this.items);
        });
        if (!this.userID) {
            this.Router.navigate(['']);
        }
    };
    /* Checkdate(form: NgForm){
      this.ItemService.getDate(form.value.appdate)
      .then(result => console.log(result))
      .catch(error => console.log(error))
    } */
    NewComponent.prototype.OnSubmit = function (event, form) {
        event.preventDefault();
        this.item.owner = this.userID;
        this.ItemService.addItem(this.item)
            .then(function (item) { return console.log(item); })
            .catch(function (error) { return console.log(error); });
        this.item = new __WEBPACK_IMPORTED_MODULE_4__items__["a" /* Item */]();
        console.log('adding new appointment');
        this.Router.navigate(['dashboard']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Array)
    ], NewComponent.prototype, "items", void 0);
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__items_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='registrationErrors.length'>\n    <ul>\n        <li *ngFor='let error of registrationErrors'> {{error}}</li>\n    </ul>\n</div>\n\n<fieldset>\n    <legend>Register</legend>\n    <form (submit)='onSubmit(register.value)' #register='ngForm' class='form-group'>\n        <div class='form-control'>\n            <label for=\"username\">Username: </label>\n            <input type=\"text\" name='username' size=\"60\" placeholder=\"Username\" #name='ngModel' [(ngModel)]='user.username' required minlength=\"2\">\n        </div>\n        <div class='form-control'>\n            <label for=\"email\">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n            <input type=\"email\" name='email' size=\"60\" placeholder=\"Email\" #email='ngModel' [(ngModel)]='user.email' required minlength=\"6\">\n        </div>\n        <div class='form-control'>\n            <label for=\"password\">Password: </label>\n            <input type=\"password\" name=\"password\" size=\"60\" placeholder=\"Password- must be at least 8 characters\" [(ngModel)]='user.password' #password='ngModel' required minlength=\"8\" maxlength=\"25\">\n        </div>\n        <div>\n            <button *ngIf='register.valid'>Register</button>\n        </div>\n    </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.registrationErrors = [];
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(request.json)
        this.auth.register(this.user)
            .then(function () { return _this.router.navigate(['dashboard']); })
            .catch(function (response) { return _this.handleErrors(response.json()); });
    };
    RegisterComponent.prototype.handleErrors = function (errors) {
        this.registrationErrors = Array.isArray(errors) ? errors : [errors.message];
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sortByPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sortByPipe = (function () {
    function sortByPipe() {
    }
    sortByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a[args] < b[args]) {
                return -1;
            }
            else if (a[args] > b[args]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    sortByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: "sortBy", pure: false }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], sortByPipe);
    return sortByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map