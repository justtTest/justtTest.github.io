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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<app-landing></app-landing>\n<app-main></app-main>\n<app-works></app-works>\n<app-prefooter></app-prefooter>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_prefooter_prefooter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/prefooter/prefooter.component */ "./src/app/components/prefooter/prefooter.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _components_works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_prefooter_prefooter_component__WEBPACK_IMPORTED_MODULE_12__["PrefooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mt-footer {\n    margin: 0;\n    width: 100%;\n    position: relative;\n    padding: 20px 0;\n    background-color: rgb(255, 255, 255);\n}\n\n.mt-inner {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-footer\">\n    <div class=\"mt-inner\">\n      <p>Created by <a href=\"https://twitter.com/justtd4ve\">@justtd4ve</a>.</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header::before {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.header-wrapper {\n    padding-top: 10vh;\n    min-height: 100vh;\n    position: relative;\n}\n\n.header-content {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    margin-top: -50px;\n}\n\n.header-content h1 {\n    font-weight: 700;\n    overflow: hidden;\n}\n\n.header-content span {\n    font-weight: 400;\n    font-size: 1em;\n}\n\n.header-content span span {\n    font-weight: 700; \n}\n\n@media (max-width: 320px) {\n    .header-content h1 {\n        font-size: 1.5em;\n    }\n}\n\n/* Extra small devices (portrait phones, less than 576px)*/\n\n@media (max-width: 575.98px) {\n    .header-content h1 {\n        font-size: 1.5em;\n    }\n}\n\n/*Small devices (landscape phones, 576px and up)*/\n\n@media (min-width: 576px) and (max-width: 767.98px) { \n    .header-content h1 {\n        font-size: 2.5em;\n    }\n}\n\n/* Medium devices (tablets, 768px and up)*/\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n    .header-content h1 {\n        font-size: 3em;\n    }\n}\n\n/* Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n\n}"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small\">\n    <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('../assets/img/home-bg.jpeg');\">\n    </div>\n    <div class=\"container\">\n        <div class=\"content-center\">\n            <h2 class=\"title\">This is our company.</h2>\n            <div class=\"text-center\">\n                <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-round btn-neutral\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>&nbsp;\n                <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-round btn-neutral\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>&nbsp;\n                <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-round btn-neutral\">\n                    <i class=\"fa fa-linkedin\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getUrl = function () {
        return "url('assets/img/home-bg.jpeg')";
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-dark {\r\n    background-color: rgb(17, 17, 17);\r\n}\r\n\r\n.section-dark > div > h2 {\r\n    color: rgb(233, 233, 233);\r\n}"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <h2 class=\"title\">What We Do</h2>\n        <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n        <br>\n        <a href=\"#paper-kit\" class=\"btn btn-primary btn-round\">See Details</a>\n        <div class=\"separator separator-primary\"></div>\n      </div>\n    </div>\n    <br><br>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"card card-plain\">\n          <img class=\"card-img-top\" src=\"../assets/img/img1.jpg\" alt=\"\">\n          <div class=\"card-block\">\n            <h4 class=\"title\">Installations</h4>\n            <p class=\"card-text\">Installation of Local Area Network, Fibre Link, CCTV, Burglar and Fire Alarm.</p>\n            <br>\n            <a href=\"#\" class=\"btn card-btn btn-common\">Learn More</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"card card-plain\">\n            <img class=\"card-img-top\" src=\"../assets/img/img2.png\" alt=\"\">\n            <div class=\"card-block\">\n              <h4 class=\"title\">Router Config.</h4>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n              <br>\n              <a href=\"#\" class=\"btn card-btn btn-common\">Learn More</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"card card-plain\">\n              <img class=\"card-img-top\" src=\"../assets/img/img3.jpg\" alt=\"\">\n              <div class=\"card-block\">\n                <h4 class=\"title\">Maintenance</h4>\n                <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                <br>\n                <a href=\"#\" class=\"btn card-btn btn-common\">Learn More</a>\n              </div>\n            </div>\n          </div>\n      <div class=\"col-md-3\">\n        <div class=\"card card-plain\">\n            <img class=\"card-img-top\" src=\"../assets/img/img4.jpg\" alt=\"\">\n            <div class=\"card-block\">\n              <h4 class=\"title\">BTS &amp; Tower</h4>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n              <br>\n              <a href=\"#\" class=\"btn card-btn btn-common\">Learn More</a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End of  CARDS-->\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">OUR TEAM</h2>\n        <div class=\"separator separator-primary\"></div>\n<div class=\"row justify-content-center\">\n    <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/ryan.jpg\" alt=\"...\" class=\"rounded-circle\"></a>\n                    </div>\n                    <div class=\"card-body\">\n                            <div class=\"author\" style=\"color: rgb(247, 247, 247)\">\n                                <h4 class=\"card-title text-\">Olusoji Adeoye</h4>\n                                <h6 class=\"card-category\">Managing Director</h6>\n                            </div>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent \" color-on-scroll=\"400\">\n  <div class=\"container\">\n      <div class=\"navbar-translate\">\n          <a class=\"scroll-switch navbar-brand\" href=\"#\">\n              <h3 style=\"font-weight: 700; margin: 0; padding: 0;\">SOJ<span class=\"text-primary\">COM</span></h3>\n          </a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"https://twitter.com/justtd4ve\">\n                      <i class=\"fa fa-facebook\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"https://twitter.com/justtd4ve\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"https://www.instagram.com/justtdave\">\n                      <i class=\"fa fa-linkedin\"></i>\n                      <p class=\"d-lg-none d-xl-none\">linkedin</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" (click)=\"sendMail()\">\n                        <i class=\"fa fa-envelope-open\"></i>\n                        <p class=\"d-lg-none d-xl-none\">E-Mail</p>\n                    </a>\n                </li>\n          </ul>\n      </div>\n  </div>\n</nav>"

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
    NavbarComponent.prototype.sendMail = function () {
        var mailSubject = "Enquiry";
        window.open('mailto:sojcom193@gmail.com?subject=' + mailSubject + '');
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

/***/ "./src/app/components/prefooter/prefooter.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/prefooter/prefooter.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/prefooter/prefooter.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/prefooter/prefooter.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2018 SOJCOM Technologies. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n"

/***/ }),

/***/ "./src/app/components/prefooter/prefooter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/prefooter/prefooter.component.ts ***!
  \*************************************************************/
/*! exports provided: PrefooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefooterComponent", function() { return PrefooterComponent; });
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

var PrefooterComponent = /** @class */ (function () {
    function PrefooterComponent() {
    }
    PrefooterComponent.prototype.ngOnInit = function () {
    };
    PrefooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prefooter',
            template: __webpack_require__(/*! ./prefooter.component.html */ "./src/app/components/prefooter/prefooter.component.html"),
            styles: [__webpack_require__(/*! ./prefooter.component.css */ "./src/app/components/prefooter/prefooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrefooterComponent);
    return PrefooterComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress_wrap {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position: relative;\n}\n\n.progress_detail {\n    width: 100%;\n    position: relative;\n    height: 25px;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\n.progress_title {\n    display: block;\n    position: absolute;\n    left: 0;\n}\n\n.progress_num {\n    display: block;\n    position: absolute;\n    right: 0;\n}\n\n.progress_bar {\n    position: relative;\n    width: 100%;\n    height: 2px;\n    background-color: rgb(232, 232, 232);\n}\n\n.progress_level { /* Safari */\n    transition: width 2s;\n    -webkit-transition-timing-function: ease;\n    width: 10%;\n    height: 2px;\n}\n\n.bio {\n    padding-bottom: 30px;\n}"

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"awe-section bg-white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">   \n        <!-- title -->\n        <div class=\"title\">\n          <h2 class=\"title__title\"><strong>SKILLS</strong><br> <span class=\"text-primary\">__</span></h2>\n        </div>\n        <!-- End / title -->\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col\">   \n          <!-- title -->\n          <div class=\"bio\">\n            <p>Hello, I'm a Web developer (both frontend and backend) basically the swiss army knife you need to make that simple website or web application idea of yours become a reality. Currently i use the powerful <span class=\"text-primary\"><strong>MEAN</strong></span> (<span class=\"text-primary\"><strong>M</strong></span>ongo db, <span class=\"text-primary\"><strong>E</strong></span>xpressjs, <span class=\"text-primary\"><strong>A</strong></span>ngular, <span class=\"text-primary\"><strong>N</strong></span>odejs) stack to develop web applications and create beautiful UIs with Bootstrap. I've built my toolkit to an extent where i'm able to work on existing projects.</p>\n          </div>\n          <!-- End / title -->\n    </div>\n  </div>\n    <div class=\"container\">\n      <h5><strong>Toolkit</strong></h5>\n      <div class=\"row\">\n        <div class=\"col progress_wrap\">\n          <div class=\"progress_detail\"><span class=\"progress_title\">HTML <i class=\"fa fa-html5\"></i></span><span class=\"progress_num\">80%</span></div>\n          <div class=\"progress_bar\">\n            <div class=\"progress_level bg-primary\" id=\"progress_1\"></div>\n          </div>\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col progress_wrap\">\n            <div class=\"progress_detail\"><span class=\"progress_title\">CSS <i class=\"fa fa-css3\"></i></span><span class=\"progress_num\">70%</span></div>\n            <div class=\"progress_bar\">\n              <div class=\"progress_level bg-info\" id=\"progress_2\"></div>\n            </div>\n          </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col progress_wrap\">\n            <div class=\"progress_detail\"><span class=\"progress_title\">JAVASCRIPT <i class=\"fa fa-js\"></i></span><span class=\"progress_num\">75%</span></div>\n            <div class=\"progress_bar\">\n              <div class=\"progress_level bg-warning\" id=\"progress_3\"></div>\n            </div>\n          </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col progress_wrap\">\n            <div class=\"progress_detail\"><span class=\"progress_title\">PHP <i class=\"fa fa-php\"></i></span><span class=\"progress_num\">50%</span></div>\n            <div class=\"progress_bar\">\n              <div class=\"progress_level bg-purple\" id=\"progress_4\"></div>\n            </div>\n          </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col progress_wrap\">\n            <div class=\"progress_detail\"><span class=\"progress_title\">MONGO DB</span><span class=\"progress_num\">90%</span></div>\n            <div class=\"progress_bar\">\n              <div class=\"progress_level bg-success\" id=\"progress_5\"></div>\n            </div>\n          </div>\n          <div class=\"w-100\"></div>\n          <div class=\"col progress_wrap\">\n              <div class=\"progress_detail\"><span class=\"progress_title\">EXPRESS</span><span class=\"progress_num\">50%</span></div>\n              <div class=\"progress_bar\">\n                <div class=\"progress_level bg-success\" id=\"progress_6\"></div>\n              </div>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col progress_wrap\">\n                <div class=\"progress_detail\"><span class=\"progress_title\">ANGULAR <i class=\"fa fa-angular\"></i></span><span class=\"progress_num\">80%</span></div>\n                <div class=\"progress_bar\">\n                  <div class=\"progress_level bg-danger\" id=\"progress_7\"></div>\n                </div>\n              </div>\n              <div class=\"w-100\"></div>\n              <div class=\"col progress_wrap\">\n                  <div class=\"progress_detail\"><span class=\"progress_title\">NODE.JS <i class=\"fa fa-node-js\"></i></span><span class=\"progress_num\">90%</span></div>\n                  <div class=\"progress_bar\">\n                    <div class=\"progress_level bg-success\" id=\"progress_8\"></div>\n                  </div>\n                </div>\n                <div class=\"w-100\"></div>\n                <div class=\"col progress_wrap\">\n                    <div class=\"progress_detail\"><span class=\"progress_title\">BOOTSTRAP</span><span class=\"progress_num\">80%</span></div>\n                    <div class=\"progress_bar\">\n                      <div class=\"progress_level bg-primary\" id=\"progress_9\"></div>\n                    </div>\n                  </div>\n                  <div class=\"w-100\"></div>\n                  <div class=\"col progress_wrap\">\n                      <div class=\"progress_detail\"><span class=\"progress_title\">VUE</span><span class=\"progress_num\">40%</span></div>\n                      <div class=\"progress_bar\">\n                        <div class=\"progress_level bg-primary\" id=\"progress_10\"></div>\n                      </div>\n                    </div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col progress_wrap\">\n                        <div class=\"progress_detail\"><span class=\"progress_title\">AR (Augmented Reality)</span><span class=\"progress_num\">30%</span></div>\n                        <div class=\"progress_bar\">\n                          <div class=\"progress_level bg-primary\" id=\"progress_11\"></div>\n                        </div>\n                      </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/works/works.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/works/works.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.awe-section {\n    opacity: 1;\n}\n\n.dont-display {\n    display: none;\n}\n\n.fs-button {\n    position: absolute;\n    z-index: 300;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: .2s ease-in-out;\n    cursor: pointer;\n}\n\n.fs-button span {\n    background: #fff;\n    display: block;\n    position: absolute;\n    left: 0;\n    height: 3px;\n    width: 100%;\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: .25s ease-in-out;\n}\n\n.fs-button span:nth-child(1) {\n    top: 0;\n}\n\n.fs-button span:nth-child(2) {\n    top: 6px;\n}\n\n.fs-button span:nth-child(3) {\n    top: 12px;\n}\n\n.fs-button.open span:nth-child(2) {\n    top: 6px;\n    left: 50%;\n    width: 0%;\n}\n\n.fs-button.open span:nth-child(1) {\n    top: 6px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.fs-button.open span:nth-child(3) {\n    top: 6px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.title {\n    opacity: 0;\n}\n\n.grid-css--masonry {\n    opacity: 0;\n}\n\n.grid-css .grid-item .grid-item__inner {\n    position: relative;\n}\n\n.grid-css.grid-css--grid .grid-item__content-wrapper {\n    position: absolute;\n}\n\n.grid-css.grid-css--grid .grid-item__content-wrapper {\n    margin: 0 !important;\n}\n\n.grid-css.grid-css--grid .grid-item__inner {\n    padding-top: 100%;\n}\n\n.grid-css.grid-css--grid .grid-item.extra-large .grid-item__inner,\n.grid-css.grid-css--grid .grid-item.wide .grid-item__inner {\n    padding-top: 50%;\n}\n\n.grid-css.grid-css--grid .grid-item.high .grid-item__inner {\n    padding-top: 200%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"4by3\"] .grid-item__inner {\n    padding-top: 75%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"4by3\"] .grid-item.extra-large .grid-item__inner,\n.grid-css.grid-css--grid[data-ratio=\"4by3\"] .grid-item.wide .grid-item__inner {\n    padding-top: 37.5%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"4by3\"] .grid-item.high .grid-item__inner {\n    padding-top: 150%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"16by9\"] .grid-item__inner {\n    padding-top: 56.25%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"16by9\"] .grid-item.extra-large .grid-item__inner,\n.grid-css.grid-css--grid[data-ratio=\"16by9\"] .grid-item.wide .grid-item__inner {\n    padding-top: 28.125%;\n}\n\n.grid-css.grid-css--grid[data-ratio=\"16by9\"] .grid-item.high .grid-item__inner {\n    padding-top: 112.5%;\n}\n\n[data-col-xs=\"1\"].grid-css .grid-item, [data-col-xs=\"1\"].grid-css .grid-sizer {\n    width: 100%;\n}\n\n[data-col-xs=\"2\"].grid-css .grid-item, [data-col-xs=\"2\"].grid-css .grid-sizer {\n    width: 50%;\n}\n\n[data-col-xs=\"2\"].grid-css .grid-item.wide,\n[data-col-xs=\"2\"].grid-css .grid-item.large {\n    width: 100%;\n}\n\n[data-col-xs=\"2\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"3\"].grid-css .grid-item, [data-col-xs=\"3\"].grid-css .grid-sizer {\n    width: 33.33333%;\n}\n\n[data-col-xs=\"3\"].grid-css .grid-item.wide,\n[data-col-xs=\"3\"].grid-css .grid-item.large {\n    width: 66.66667%;\n}\n\n[data-col-xs=\"3\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"4\"].grid-css .grid-item, [data-col-xs=\"4\"].grid-css .grid-sizer {\n    width: 25%;\n}\n\n[data-col-xs=\"4\"].grid-css .grid-item.wide,\n[data-col-xs=\"4\"].grid-css .grid-item.large {\n    width: 50%;\n}\n\n[data-col-xs=\"4\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"5\"].grid-css .grid-item, [data-col-xs=\"5\"].grid-css .grid-sizer {\n    width: 20%;\n}\n\n[data-col-xs=\"5\"].grid-css .grid-item.wide,\n[data-col-xs=\"5\"].grid-css .grid-item.large {\n    width: 40%;\n}\n\n[data-col-xs=\"5\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"6\"].grid-css .grid-item, [data-col-xs=\"6\"].grid-css .grid-sizer {\n    width: 16.66667%;\n}\n\n[data-col-xs=\"6\"].grid-css .grid-item.wide,\n[data-col-xs=\"6\"].grid-css .grid-item.large {\n    width: 33.33333%;\n}\n\n[data-col-xs=\"6\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"7\"].grid-css .grid-item, [data-col-xs=\"7\"].grid-css .grid-sizer {\n    width: 14.28571%;\n}\n\n[data-col-xs=\"7\"].grid-css .grid-item.wide,\n[data-col-xs=\"7\"].grid-css .grid-item.large {\n    width: 28.57143%;\n}\n\n[data-col-xs=\"7\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"8\"].grid-css .grid-item, [data-col-xs=\"8\"].grid-css .grid-sizer {\n    width: 12.5%;\n}\n\n[data-col-xs=\"8\"].grid-css .grid-item.wide,\n[data-col-xs=\"8\"].grid-css .grid-item.large {\n    width: 25%;\n}\n\n[data-col-xs=\"8\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"9\"].grid-css .grid-item, [data-col-xs=\"9\"].grid-css .grid-sizer {\n    width: 11.11111%;\n}\n\n[data-col-xs=\"9\"].grid-css .grid-item.wide,\n[data-col-xs=\"9\"].grid-css .grid-item.large {\n    width: 22.22222%;\n}\n\n[data-col-xs=\"9\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n[data-col-xs=\"10\"].grid-css .grid-item, [data-col-xs=\"10\"].grid-css .grid-sizer {\n    width: 10%;\n}\n\n[data-col-xs=\"10\"].grid-css .grid-item.wide,\n[data-col-xs=\"10\"].grid-css .grid-item.large {\n    width: 20%;\n}\n\n[data-col-xs=\"10\"].grid-css .grid-item.extra-large {\n    width: 100%;\n}\n\n@media (min-width: 768px) {\n    [data-col-sm=\"1\"].grid-css .grid-item,\n    [data-col-sm=\"1\"].grid-css .grid-sizer {\n        width: 100%;\n    }\n\n    [data-col-sm=\"2\"].grid-css .grid-item,\n    [data-col-sm=\"2\"].grid-css .grid-sizer {\n        width: 50%;\n    }\n\n    [data-col-sm=\"2\"].grid-css .grid-item.wide,\n    [data-col-sm=\"2\"].grid-css .grid-item.large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"2\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"3\"].grid-css .grid-item,\n    [data-col-sm=\"3\"].grid-css .grid-sizer {\n        width: 33.33333%;\n    }\n\n    [data-col-sm=\"3\"].grid-css .grid-item.wide,\n    [data-col-sm=\"3\"].grid-css .grid-item.large {\n        width: 66.66667%;\n    }\n\n    [data-col-sm=\"3\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"4\"].grid-css .grid-item,\n    [data-col-sm=\"4\"].grid-css .grid-sizer {\n        width: 25%;\n    }\n\n    [data-col-sm=\"4\"].grid-css .grid-item.wide,\n    [data-col-sm=\"4\"].grid-css .grid-item.large {\n        width: 50%;\n    }\n\n    [data-col-sm=\"4\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"5\"].grid-css .grid-item,\n    [data-col-sm=\"5\"].grid-css .grid-sizer {\n        width: 20%;\n    }\n\n    [data-col-sm=\"5\"].grid-css .grid-item.wide,\n    [data-col-sm=\"5\"].grid-css .grid-item.large {\n        width: 40%;\n    }\n\n    [data-col-sm=\"5\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"6\"].grid-css .grid-item,\n    [data-col-sm=\"6\"].grid-css .grid-sizer {\n        width: 16.66667%;\n    }\n\n    [data-col-sm=\"6\"].grid-css .grid-item.wide,\n    [data-col-sm=\"6\"].grid-css .grid-item.large {\n        width: 33.33333%;\n    }\n\n    [data-col-sm=\"6\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"7\"].grid-css .grid-item,\n    [data-col-sm=\"7\"].grid-css .grid-sizer {\n        width: 14.28571%;\n    }\n\n    [data-col-sm=\"7\"].grid-css .grid-item.wide,\n    [data-col-sm=\"7\"].grid-css .grid-item.large {\n        width: 28.57143%;\n    }\n\n    [data-col-sm=\"7\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"8\"].grid-css .grid-item,\n    [data-col-sm=\"8\"].grid-css .grid-sizer {\n        width: 12.5%;\n    }\n\n    [data-col-sm=\"8\"].grid-css .grid-item.wide,\n    [data-col-sm=\"8\"].grid-css .grid-item.large {\n        width: 25%;\n    }\n\n    [data-col-sm=\"8\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"9\"].grid-css .grid-item,\n    [data-col-sm=\"9\"].grid-css .grid-sizer {\n        width: 11.11111%;\n    }\n\n    [data-col-sm=\"9\"].grid-css .grid-item.wide,\n    [data-col-sm=\"9\"].grid-css .grid-item.large {\n        width: 22.22222%;\n    }\n\n    [data-col-sm=\"9\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-sm=\"10\"].grid-css .grid-item,\n    [data-col-sm=\"10\"].grid-css .grid-sizer {\n        width: 10%;\n    }\n\n    [data-col-sm=\"10\"].grid-css .grid-item.wide,\n    [data-col-sm=\"10\"].grid-css .grid-item.large {\n        width: 20%;\n    }\n\n    [data-col-sm=\"10\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n}\n\n@media (min-width: 992px) {\n    [data-col-md=\"1\"].grid-css .grid-item,\n    [data-col-md=\"1\"].grid-css .grid-sizer {\n        width: 100%;\n    }\n\n    [data-col-md=\"2\"].grid-css .grid-item,\n    [data-col-md=\"2\"].grid-css .grid-sizer {\n        width: 50%;\n    }\n\n    [data-col-md=\"2\"].grid-css .grid-item.wide,\n    [data-col-md=\"2\"].grid-css .grid-item.large {\n        width: 100%;\n    }\n\n    [data-col-md=\"2\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"3\"].grid-css .grid-item,\n    [data-col-md=\"3\"].grid-css .grid-sizer {\n        width: 33.33333%;\n    }\n\n    [data-col-md=\"3\"].grid-css .grid-item.wide,\n    [data-col-md=\"3\"].grid-css .grid-item.large {\n        width: 66.66667%;\n    }\n\n    [data-col-md=\"3\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"4\"].grid-css .grid-item,\n    [data-col-md=\"4\"].grid-css .grid-sizer {\n        width: 25%;\n    }\n\n    [data-col-md=\"4\"].grid-css .grid-item.wide,\n    [data-col-md=\"4\"].grid-css .grid-item.large {\n        width: 50%;\n    }\n\n    [data-col-md=\"4\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"5\"].grid-css .grid-item,\n    [data-col-md=\"5\"].grid-css .grid-sizer {\n        width: 20%;\n    }\n\n    [data-col-md=\"5\"].grid-css .grid-item.wide,\n    [data-col-md=\"5\"].grid-css .grid-item.large {\n        width: 40%;\n    }\n\n    [data-col-md=\"5\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"6\"].grid-css .grid-item,\n    [data-col-md=\"6\"].grid-css .grid-sizer {\n        width: 16.66667%;\n    }\n\n    [data-col-md=\"6\"].grid-css .grid-item.wide,\n    [data-col-md=\"6\"].grid-css .grid-item.large {\n        width: 33.33333%;\n    }\n\n    [data-col-md=\"6\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"7\"].grid-css .grid-item,\n    [data-col-md=\"7\"].grid-css .grid-sizer {\n        width: 14.28571%;\n    }\n\n    [data-col-md=\"7\"].grid-css .grid-item.wide,\n    [data-col-md=\"7\"].grid-css .grid-item.large {\n        width: 28.57143%;\n    }\n\n    [data-col-md=\"7\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"8\"].grid-css .grid-item,\n    [data-col-md=\"8\"].grid-css .grid-sizer {\n        width: 12.5%;\n    }\n\n    [data-col-md=\"8\"].grid-css .grid-item.wide,\n    [data-col-md=\"8\"].grid-css .grid-item.large {\n        width: 25%;\n    }\n\n    [data-col-md=\"8\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"9\"].grid-css .grid-item,\n    [data-col-md=\"9\"].grid-css .grid-sizer {\n        width: 11.11111%;\n    }\n\n    [data-col-md=\"9\"].grid-css .grid-item.wide,\n    [data-col-md=\"9\"].grid-css .grid-item.large {\n        width: 22.22222%;\n    }\n\n    [data-col-md=\"9\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-md=\"10\"].grid-css .grid-item,\n    [data-col-md=\"10\"].grid-css .grid-sizer {\n        width: 10%;\n    }\n\n    [data-col-md=\"10\"].grid-css .grid-item.wide,\n    [data-col-md=\"10\"].grid-css .grid-item.large {\n        width: 20%;\n    }\n\n    [data-col-md=\"10\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n}\n\n@media (min-width: 1200px) {\n    [data-col-lg=\"1\"].grid-css .grid-item,\n    [data-col-lg=\"1\"].grid-css .grid-sizer {\n        width: 100%;\n    }\n\n    [data-col-lg=\"2\"].grid-css .grid-item,\n    [data-col-lg=\"2\"].grid-css .grid-sizer {\n        width: 50%;\n    }\n\n    [data-col-lg=\"2\"].grid-css .grid-item.wide,\n    [data-col-lg=\"2\"].grid-css .grid-item.large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"2\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"3\"].grid-css .grid-item,\n    [data-col-lg=\"3\"].grid-css .grid-sizer {\n        width: 33.33333%;\n    }\n\n    [data-col-lg=\"3\"].grid-css .grid-item.wide,\n    [data-col-lg=\"3\"].grid-css .grid-item.large {\n        width: 66.66667%;\n    }\n\n    [data-col-lg=\"3\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"4\"].grid-css .grid-item,\n    [data-col-lg=\"4\"].grid-css .grid-sizer {\n        width: 25%;\n    }\n\n    [data-col-lg=\"4\"].grid-css .grid-item.wide,\n    [data-col-lg=\"4\"].grid-css .grid-item.large {\n        width: 50%;\n    }\n\n    [data-col-lg=\"4\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"5\"].grid-css .grid-item,\n    [data-col-lg=\"5\"].grid-css .grid-sizer {\n        width: 20%;\n    }\n\n    [data-col-lg=\"5\"].grid-css .grid-item.wide,\n    [data-col-lg=\"5\"].grid-css .grid-item.large {\n        width: 40%;\n    }\n\n    [data-col-lg=\"5\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"6\"].grid-css .grid-item,\n    [data-col-lg=\"6\"].grid-css .grid-sizer {\n        width: 16.66667%;\n    }\n\n    [data-col-lg=\"6\"].grid-css .grid-item.wide,\n    [data-col-lg=\"6\"].grid-css .grid-item.large {\n        width: 33.33333%;\n    }\n\n    [data-col-lg=\"6\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"7\"].grid-css .grid-item,\n    [data-col-lg=\"7\"].grid-css .grid-sizer {\n        width: 14.28571%;\n    }\n\n    [data-col-lg=\"7\"].grid-css .grid-item.wide,\n    [data-col-lg=\"7\"].grid-css .grid-item.large {\n        width: 28.57143%;\n    }\n\n    [data-col-lg=\"7\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"8\"].grid-css .grid-item,\n    [data-col-lg=\"8\"].grid-css .grid-sizer {\n        width: 12.5%;\n    }\n\n    [data-col-lg=\"8\"].grid-css .grid-item.wide,\n    [data-col-lg=\"8\"].grid-css .grid-item.large {\n        width: 25%;\n    }\n\n    [data-col-lg=\"8\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"9\"].grid-css .grid-item,\n    [data-col-lg=\"9\"].grid-css .grid-sizer {\n        width: 11.11111%;\n    }\n\n    [data-col-lg=\"9\"].grid-css .grid-item.wide,\n    [data-col-lg=\"9\"].grid-css .grid-item.large {\n        width: 22.22222%;\n    }\n\n    [data-col-lg=\"9\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n\n    [data-col-lg=\"10\"].grid-css .grid-item,\n    [data-col-lg=\"10\"].grid-css .grid-sizer {\n        width: 10%;\n    }\n\n    [data-col-lg=\"10\"].grid-css .grid-item.wide,\n    [data-col-lg=\"10\"].grid-css .grid-item.large {\n        width: 20%;\n    }\n\n    [data-col-lg=\"10\"].grid-css .grid-item.extra-large {\n        width: 100%;\n    }\n}\n\n[data-gap=\"5\"].grid-css .grid__inner {\n    margin: -3px;\n}\n\n[data-gap=\"5\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 3px;\n    top: 3px;\n    right: 3px;\n    bottom: 3px;\n    left: 3px;\n}\n\n[data-gap=\"10\"].grid-css .grid__inner {\n    margin: -5px;\n}\n\n[data-gap=\"10\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 5px;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n}\n\n[data-gap=\"15\"].grid-css .grid__inner {\n    margin: -8px;\n}\n\n[data-gap=\"15\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 8px;\n    top: 8px;\n    right: 8px;\n    bottom: 8px;\n    left: 8px;\n}\n\n[data-gap=\"20\"].grid-css .grid__inner {\n    margin: -10px;\n}\n\n[data-gap=\"20\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 10px;\n    top: 10px;\n    right: 10px;\n    bottom: 10px;\n    left: 10px;\n}\n\n[data-gap=\"25\"].grid-css .grid__inner {\n    margin: -13px;\n}\n\n[data-gap=\"25\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 13px;\n    top: 13px;\n    right: 13px;\n    bottom: 13px;\n    left: 13px;\n}\n\n[data-gap=\"30\"].grid-css .grid__inner {\n    margin: -15px;\n}\n\n[data-gap=\"30\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 15px;\n    top: 15px;\n    right: 15px;\n    bottom: 15px;\n    left: 15px;\n}\n\n[data-gap=\"35\"].grid-css .grid__inner {\n    margin: -18px;\n}\n\n[data-gap=\"35\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 18px;\n    top: 18px;\n    right: 18px;\n    bottom: 18px;\n    left: 18px;\n}\n\n[data-gap=\"40\"].grid-css .grid__inner {\n    margin: -20px;\n}\n\n[data-gap=\"40\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 20px;\n    top: 20px;\n    right: 20px;\n    bottom: 20px;\n    left: 20px;\n}\n\n[data-gap=\"45\"].grid-css .grid__inner {\n    margin: -23px;\n}\n\n[data-gap=\"45\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 23px;\n    top: 23px;\n    right: 23px;\n    bottom: 23px;\n    left: 23px;\n}\n\n[data-gap=\"50\"].grid-css .grid__inner {\n    margin: -25px;\n}\n\n[data-gap=\"50\"].grid-css .grid__inner .grid-item .grid-item__content-wrapper {\n    margin: 25px;\n    top: 25px;\n    right: 25px;\n    bottom: 25px;\n    left: 25px;\n}\n\n/* 9. grid-css\n--------------------------------------------------------------------------------*/\n\n.grid-css {\n    margin: 0;\n}\n\n.grid-css .grid-item, .grid-css .grid-sizer {\n    width: 100%;\n}\n\n.grid-css .grid-item .grid-item__inner .grid-item__content-wrapper {\n    background-color: #ccc;\n}\n\n.grid-css.grid-css--grid .grid-item__content-wrapper {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n.filter {\n    margin: 0 -10px 30px;\n}\n\n.filter li {\n    display: inline-block;\n}\n\n.filter li.current a {\n    color: #000;\n}\n\n.filter a {\n    display: block;\n    position: relative;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: capitalize;\n    color: #555;\n    padding: 5px 10px;\n}\n\n/* 10. hoverbox\n--------------------------------------------------------------------------------*/\n\n.hoverbox {\n    position: relative;\n    overflow: hidden;\n    padding: 0 !important;\n    z-index: 9;\n}\n\n.hoverbox.light .hb_back {\n    background-color: rgba(255, 255, 255, .8);\n    color: #333;\n}\n\n.hoverbox.light .hb_back h2, .hoverbox.light .hb_back h3,\n.hoverbox.light .hb_back h4 {\n    color: #333;\n}\n\n.hb_front {\n    z-index: auto !important;\n}\n\n.hb_back {\n    position: absolute;\n    background-color: rgba(0, 0, 0, .6);\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 9;\n    overflow: hidden;\n    transition: all .3s cubic-bezier(.5, .72, .24, .94);\n}\n\n.hb_back h2, .hb_back h3, .hb_back h4 {\n    color: #fff;\n}\n\n.hb_back .tb {\n    display: table !important;\n    width: 100%;\n    height: 100%;\n}\n\n/* Effect */\n\n.ef-push-bottom .hb_back, .ef-move-top .hb_back {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n}\n\n.ef-push-top .hb_back, .ef-move-bottom .hb_back {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n}\n\n.ef-push-left .hb_back, .ef-move-right .hb_back {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n}\n\n.ef-push-right .hb_back, .ef-move-left .hb_back {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n}\n\n.ef-classic .hb_back {\n    display: none;\n}\n\n.ef-classic:hover .hb_back {\n    display: block;\n}\n\n.ef-fade .hb_back {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.ef-fade:hover .hb_back {\n    opacity: 1;\n    visibility: visible;\n}\n\n.ef-push-top:hover .hb_back, .ef-push-right:hover .hb_back,\n.ef-push-bottom:hover .hb_back, .ef-push-left:hover .hb_back,\n.ef-move-top:hover .hb_back, .ef-move-right:hover .hb_back,\n.ef-move-bottom:hover .hb_back, .ef-move-left:hover .hb_back {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n\n.ef-push-top .hb_front, .ef-push-right .hb_front, .ef-push-bottom .hb_front,\n.ef-push-left .hb_front {\n    transition: all .3s cubic-bezier(.5, .72, .24, .94);\n}\n\n.ef-push-top:hover .hb_back, .ef-push-right:hover .hb_back,\n.ef-push-bottom:hover .hb_back, .ef-push-left:hover .hb_back {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n\n.ef-push-top:hover .hb_front {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n}\n\n.ef-push-bottom:hover .hb_front {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n}\n\n.ef-push-left:hover .hb_front {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n}\n\n.ef-push-right:hover .hb_front {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n}\n\n.ef-flip-y, .ef-flip-x {\n    overflow: visible;\n    -webkit-perspective: 0;\n}\n\n.ef-flip-y .ef-caption-outer, .ef-flip-x .ef-caption-outer {\n    overflow: visible !important;\n}\n\n.ef-flip-y .hb_back, .ef-flip-y .hb_front, .ef-flip-x .hb_back,\n.ef-flip-x .hb_front {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all .5s cubic-bezier(.5, .72, .24, .94);\n}\n\n.ef-flip-y .hb_front {\n    -webkit-transform: perspective(200em) rotateY(0);\n            transform: perspective(200em) rotateY(0);\n}\n\n.ef-flip-y .hb_back {\n    -webkit-transform: perspective(200em) rotateY(180deg);\n            transform: perspective(200em) rotateY(180deg);\n}\n\n.ef-flip-y:hover .hb_front {\n    -webkit-transform: perspective(200em) rotateY(-180deg);\n            transform: perspective(200em) rotateY(-180deg);\n}\n\n.ef-flip-y:hover .hb_back {\n    z-index: 9;\n    -webkit-transform: perspective(200em) rotateY(0);\n            transform: perspective(200em) rotateY(0);\n}\n\n.ef-flip-x .hb_front {\n    -webkit-transform: perspective(200em) rotateX(0);\n            transform: perspective(200em) rotateX(0);\n}\n\n.ef-flip-x .hb_back {\n    -webkit-transform: perspective(200em) rotateX(-180deg);\n            transform: perspective(200em) rotateX(-180deg);\n}\n\n.ef-flip-x:hover .hb_front {\n    -webkit-transform: perspective(200em) rotateX(180deg);\n            transform: perspective(200em) rotateX(180deg);\n}\n\n.ef-flip-x:hover .hb_back {\n    z-index: 9;\n    -webkit-transform: perspective(200em) rotateX(0);\n            transform: perspective(200em) rotateX(0);\n}\n\n.ef-slide-top .hb_front, .ef-slide-right .hb_front, .ef-slide-bottom .hb_front,\n.ef-slide-left .hb_front {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    transition: all .3s cubic-bezier(.5, .72, .24, .94);\n}\n\n.ef-slide-top .hb_back, .ef-slide-right .hb_back, .ef-slide-bottom .hb_back,\n.ef-slide-left .hb_back {\n    z-index: -1;\n}\n\n.ef-slide-top .hb_back > *, .ef-slide-right .hb_back > *,\n.ef-slide-bottom .hb_back > *, .ef-slide-left .hb_back > * {\n    opacity: 0;\n    transition: all .3s cubic-bezier(.5, .72, .24, .94);\n}\n\n.ef-slide-top:hover .hb_back > *, .ef-slide-right:hover .hb_back > *,\n.ef-slide-bottom:hover .hb_back > *, .ef-slide-left:hover .hb_back > * {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n\n.ef-slide-top:hover .hb_front {\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n}\n\n.ef-slide-right:hover .hb_front {\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n}\n\n.ef-slide-bottom:hover .hb_front {\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n}\n\n.ef-slide-left:hover .hb_front {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n}\n\n.ef-zoom-in .hb_back {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: all .3s ease;\n}\n\n.ef-zoom-in:hover .hb_back {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n\n.ef-hoverdir .hb_back {\n    top: 0;\n    left: 100%;\n    right: auto;\n    width: 100%;\n    transition: none;\n}\n\n/* 11. page_title\n--------------------------------------------------------------------------------*/\n\n.page-title {\n    padding: 110px 0 40px 0;\n}\n\n.page-title__title {\n    font-size: 30px;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n@media (min-width: 320px) {\n    .page-title__title {\n        font-size: calc(2.27273vw + 22.72727px);\n    }\n}\n\n@media (min-width: 1200px) {\n    .page-title__title {\n        font-size: 50px;\n    }\n}\n\n.page-title__title .typing__module {\n    display: inline-block;\n}\n\n.page-title__text {\n    font-size: 16px;\n    color: #a3a3a3;\n}\n\n.page-title__divider {\n    width: 40px;\n    height: 3px;\n    background-color: #333;\n    margin-top: 30px;\n}\n\n.page-title__social {\n    margin-top: 30px;\n}\n\n.page-title__social > a {\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n}\n\n/* 12. post_detail\n--------------------------------------------------------------------------------*/\n\n.post-detail__title {\n    font-size: 25px;\n    text-transform: uppercase;\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n\n@media (min-width: 320px) {\n    .post-detail__title {\n        font-size: calc(1.70455vw + 19.54545px);\n    }\n}\n\n@media (min-width: 1200px) {\n    .post-detail__title {\n        font-size: 40px;\n    }\n}\n\n.post-detail__cat {\n    display: inline-block;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #ff594f;\n    margin-bottom: 0;\n}\n\n.post-detail__meta {\n    text-transform: capitalize;\n    font-size: 12px;\n    margin-bottom: 40px;\n}\n\n.post-detail__meta .author {\n    font-weight: 600;\n    color: #c0c0c0;\n    margin-left: 5px;\n}\n\n.post-detail__meta .author a:hover {\n    text-decoration: none;\n}\n\n.post-detail__media {\n    margin-bottom: 30px;\n}\n\n.post-detail__entry {\n    font-size: 14px;\n    padding: 10px 0 40px;\n}\n\n/* 13. post\n--------------------------------------------------------------------------------*/\n\n.post:hover img {\n    -webkit-transform: scale(1.1, 1.1) translateZ(0);\n            transform: scale(1.1, 1.1) translateZ(0);\n}\n\n.post__media {\n    overflow: hidden;\n}\n\n.post__media img {\n    -webkit-transform: scale(1, 1) translateZ(0);\n            transform: scale(1, 1) translateZ(0);\n    transition: all .3s ease;\n}\n\n.post__body {\n    padding: 30px 20px;\n    background-color: #fff;\n}\n\n.post__body .md-btn {\n    text-transform: capitalize;\n}\n\n.post__title {\n    font-size: 18px;\n    text-transform: uppercase;\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.post__text {\n    font-size: 14px;\n    color: #c0c0c0;\n    margin-bottom: 20px;\n}\n\n.post__meta {\n    text-transform: capitalize;\n    font-size: 12px;\n    margin-bottom: 10px;\n}\n\n.post__meta .author {\n    font-weight: 600;\n    color: #c0c0c0;\n    margin-left: 5px;\n}\n\n.post__meta .author a:hover {\n    text-decoration: none;\n}\n\n/* 19. work\n--------------------------------------------------------------------------------*/\n\n.work {\n    position: relative;\n}\n\n.work .hb_back {\n    padding: 20px;\n}\n\n.work__title {\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: bold;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n@media (min-width: 320px) {\n    .work__title {\n        font-size: calc(.45455vw + 16.54545px);\n    }\n}\n\n@media (min-width: 1200px) {\n    .work__title {\n        font-size: 22px;\n    }\n}\n\n.work__text {\n    font-size: 14px;\n}\n\n@media (min-width: 993px) {\n    .work .hb_back {\n        padding: 30px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/works/works.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/works/works.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"awe-section bg-grey\" id=\"awe\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 \">\n          \n          <!-- title -->\n          <div class=\"title\">\n            <h2 class=\"title__title\"><strong>Projects</strong><br> <span class=\"text-primary\">__</span></h2>\n          </div><!-- End / title -->\n          \n        </div>\n      </div>\n      <div class=\"grid-css grid-css--masonry\" data-col-lg=\"3\" data-col-md=\"2\" data-col-sm=\"2\" data-col-xs=\"1\" data-gap=\"30\">\n        <div class=\"grid__inner\">\n          <div class=\"grid-sizer\"></div>\n          <div class=\"grid-item\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"https://dayve.ml\">\n                    \n                    <!-- hoverbox ef-slide-bottom -->\n                    <div class=\"hoverbox ef-slide-bottom light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"assets/img/img1.jpg\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Oceandigital's fibre link project.</h2><span class=\"work__text\">View details</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-slide-bottom -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-move-top -->\n                    <div class=\"hoverbox ef-move-top light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/609687/pexels-photo-609687.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">How to Create and Manage SVG Sprites</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-move-top -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-slide-right -->\n                    <div class=\"hoverbox ef-slide-right light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/754949/pexels-photo-754949.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Using Memes in Your Content</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-slide-right -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-zoom-in -->\n                    <div class=\"hoverbox ef-zoom-in light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/794578/pexels-photo-794578.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Is UX Really That Important?</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-zoom-in -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-zoom-in -->\n                    <div class=\"hoverbox ef-zoom-in light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/580649/pexels-photo-580649.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Best National Locations</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-zoom-in -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-slide-right -->\n                    <div class=\"hoverbox ef-slide-right light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Best National Locations</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-slide-right -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-move-right -->\n                    <div class=\"hoverbox ef-move-right light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/792906/pexels-photo-792906.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">Free PSD Files</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-move-right -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-move-bottom -->\n                    <div class=\"hoverbox ef-move-bottom light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/789140/pexels-photo-789140.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">5 Ways to Use 404 Pages</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-move-bottom -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"grid-item dont-display\">\n            <div class=\"grid-item__inner\">\n              <div class=\"grid-item__content-wrapper\">\n                \n                <!-- work -->\n                <div class=\"work\"><a href=\"work-detail.html\">\n                    \n                    <!-- hoverbox ef-move-bottom -->\n                    <div class=\"hoverbox ef-move-bottom light\">\n                      \n                      <!-- hb_front -->\n                      <div class=\"hb_front\"><img src=\"https://images.pexels.com/photos/15382/pexels-photo.jpg?h=350&amp;auto=compress&amp;cs=tinysrgb\" alt=\"\"/>\n                      </div><!-- End / hb_front -->\n                      \n                      \n                      <!-- hb_back -->\n                      <div class=\"hb_back\">\n                        <h2 class=\"work__title\">5 Ways to Use 404 Pages</h2><span class=\"work__text\">View detail</span>\n                      </div><!-- End / hb_back -->\n                      \n                    </div><!-- End / hoverbox ef-move-bottom -->\n                    </a>\n                </div><!-- End / work -->\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/works/works.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
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

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
        var bull = document.getElementById('awe');
        var whereWorks = bull.offsetTop;
    };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/components/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/components/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
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

module.exports = __webpack_require__(/*! C:\Projects\soji-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map