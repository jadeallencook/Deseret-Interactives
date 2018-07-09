webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\" id=\"router-container\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"row\" class=\"footer\">Built by\n    <a href=\"https://twitter.com/jadeallencook\" target=\"_blank\">@jadeallencook</a> for the\n    <a href=\"https://www.deseretnews.com/\" target=\"_blank\">Deseret News</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "div.container div.footer {\n  text-align: center;\n  font-size: 0.75em;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        var config = {
            apiKey: "AIzaSyDpJaDpX8MPIOTXJg_oKMY4-0e0AvizW8c",
            authDomain: "dn-interactives.firebaseapp.com",
            databaseURL: "https://dn-interactives.firebaseio.com",
            projectId: "dn-interactives",
            storageBucket: "dn-interactives.appspot.com",
            messagingSenderId: "403753384515"
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](config);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (!user)
                _this.router.navigate(['/login']);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__ = __webpack_require__("./src/app/pages/venues/venues.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'venues', component: __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__["a" /* VenuesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__["a" /* VenuesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img src=\"https://www.deseretnews.com/v4/dist/3d030804bee0161fa244b52a297c43e6.svg\" />\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\" *ngIf=\"signedIn\">\n      <a class=\"nav-item nav-link\" routerLink=\"/venues\">Venues</a>\n      <a class=\"nav-item nav-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav.navbar {\n  margin-bottom: 25px;\n  text-align: center; }\n  nav.navbar a.navbar-brand {\n    margin-left: 25px; }\n  nav.navbar a.navbar-brand img {\n      height: 25px; }\n  nav.navbar div.collapse div.navbar-nav {\n    margin-left: auto;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  nav.navbar div.collapse div.navbar-nav a {\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.signedIn = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (!user)
                _this.signedIn = false;
            else
                _this.signedIn = true;
        });
        router.events.subscribe(function () {
            if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
                _this.signedIn = true;
            else
                _this.signedIn = false;
        });
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\n<p>This is your connection to creating and managing databases for Newsroom.js intereactives.</p>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\"></div>\n  <div class=\"col-6\">\n    <h1>Login</h1>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Email</span>\n      </div>\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Password</span>\n      </div>\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n    <span class=\"error\">{{error}}</span>\n    <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n    <button class=\"btn btn-secondary\" (click)=\"signup()\">Signup</button>\n  </div>\n  <div class=\"col-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row div h1 {\n  margin-bottom: 25px;\n  text-align: center; }\n\ndiv.row div div.input-group {\n  margin-bottom: 15px; }\n\ndiv.row div div.input-group div span {\n    width: 100px; }\n\ndiv.row div button.btn {\n  margin-bottom: 25px; }\n\ndiv.row div span.error {\n  display: block;\n  margin-bottom: 15px;\n  color: red;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        var _this = this;
        this.router = router;
        this.email = '';
        this.password = '';
        this.error = '';
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user)
                _this.router.navigate(['/home']);
        });
        if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).then(function () {
            _this.router.navigate(['/home']);
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password).then(function () {
            _this.login();
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            host: {
                class: 'col-12'
            },
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/venues/venues.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Venues</h1>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"photo\" [style.background-image]=\"setBackground(venue.image)\"></div>\n  </div>\n  <div class=\"col-md-8\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"venue.name\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Image\" [(ngModel)]=\"venue.image\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Location\" [(ngModel)]=\"venue.location\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Capacity\" [(ngModel)]=\"venue.capacity\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Parking\" [(ngModel)]=\"venue.parking\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Security\" [(ngModel)]=\"venue.security\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"venue.phone\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Website URL\" [(ngModel)]=\"venue.website\">\n    <textarea class=\"form-control\" placeholder=\"Food and beverage\" rows=\"3\" [(ngModel)]=\"venue.food\"></textarea>\n    <textarea class=\"form-control\" placeholder=\"Notes\" rows=\"3\" [(ngModel)]=\"venue.notes\"></textarea>\n    <div *ngIf=\"editor.success\" class=\"alert alert-success\" role=\"alert\">\n      {{editor.success}}\n    </div>\n    <div *ngIf=\"editor.error\" class=\"alert alert-danger\" role=\"alert\">\n      {{editor.error}}\n    </div>\n    <div *ngIf=\"editor.warning\" class=\"alert alert-warning\" role=\"alert\">\n      {{editor.warning}}\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"post()\">Submit</button>\n    <button class=\"btn btn-secondary\" (click)=\"clear()\">Clear</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Phone</th>\n          <th scope=\"col\">Website</th>\n          <th scope=\"col\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let venue of venues.reverse(); index as x\">\n          <td>{{venue.name}}</td>\n          <td>{{venue.location}}</td>\n          <td>{{venue.phone}}</td>\n          <td>\n            <a href=\"http://www.{{venue.website}}\" target=\"_blank\">{{venue.website}}</a>\n          </td>\n          <td>\n            <span class=\"edit\" (click)=\"edit(venues.length - x - 1)\">Edit</span> or\n            <span class=\"delete\" (click)=\"delete(venues.length - x - 1)\">Delete</span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/venues/venues.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row {\n  margin-bottom: 25px; }\n  div.row div span.success {\n    color: blue; }\n  div.row div span.error {\n    color: red; }\n  div.row div div.photo {\n    height: 250px;\n    width: 90%;\n    float: left;\n    background-color: grey;\n    margin-bottom: 25px;\n    background-size: cover;\n    background-position: center center; }\n  div.row input,\n  div.row textarea {\n    margin-bottom: 15px; }\n  div.row input {\n    width: 40%;\n    display: inline-block;\n    margin-right: 15px; }\n  div.row div table tbody tr td span {\n    cursor: pointer; }\n  div.row div table tbody tr td span.delete {\n    color: red; }\n  div.row div table tbody tr td span.edit {\n    color: #007bff; }\n"

/***/ }),

/***/ "./src/app/pages/venues/venues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenuesComponent = /** @class */ (function () {
    function VenuesComponent(_sanitizer) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.venue = {
            name: '',
            image: '',
            location: '',
            capacity: '',
            parking: '',
            security: '',
            phone: '',
            website: '',
            food: '',
            notes: ''
        };
        this.editor = {
            id: null,
            success: '',
            error: '',
            warning: ''
        };
        this.venues = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/venues').on('value', function (snapshot) {
            _this.venues = snapshot.val();
        });
    }
    VenuesComponent.prototype.setBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    VenuesComponent.prototype.delete = function (id) {
        var _this = this;
        this.venues = this.venues.filter(function (item) {
            return item !== _this.venues[id];
        });
        this.update();
    };
    VenuesComponent.prototype.clear = function () {
        this.venue = {
            name: '',
            image: '',
            location: '',
            capacity: '',
            parking: '',
            security: '',
            phone: '',
            website: '',
            food: '',
            notes: ''
        };
        this.editor.id = null;
    };
    VenuesComponent.prototype.edit = function (id) {
        this.venue = this.venues[id];
        if (!this.venue.notes)
            this.venue.notes = '';
        this.editor.id = id;
        window.scrollTo(0, 0);
    };
    VenuesComponent.prototype.alert = function () {
        var _this = this;
        var clear = setTimeout(function () {
            _this.editor.error = '';
            _this.editor.success = '';
            clearTimeout(clear);
        }, 5000);
    };
    VenuesComponent.prototype.update = function () {
        var _this = this;
        this.editor.warning = 'Working...';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('venues').set(this.venues).then(function () {
            _this.editor.warning = '';
            _this.editor.success = 'Success!';
            _this.alert();
        }).catch(function (msg) {
            _this.editor.warning = '';
            _this.editor.error = msg;
            _this.alert();
        });
    };
    VenuesComponent.prototype.post = function () {
        if (this.venue.name.length <= 0) {
            this.editor.warning = 'You forgot a name';
            this.alert();
        }
        else {
            if (this.editor.id)
                this.venues[this.editor.id] = this.venue;
            else
                this.venues.push(this.venue);
            this.update();
        }
    };
    VenuesComponent.prototype.ngOnInit = function () {
    };
    VenuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-venues',
            host: {
                class: 'col-12'
            },
            template: __webpack_require__("./src/app/pages/venues/venues.component.html"),
            styles: [__webpack_require__("./src/app/pages/venues/venues.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], VenuesComponent);
    return VenuesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map