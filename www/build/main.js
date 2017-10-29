webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarContraseAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecuperarContraseAPage = RecuperarContraseAPage_1 = (function () {
    function RecuperarContraseAPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RecuperarContraseAPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RecuperarContraseAPage.prototype.goToRecuperarContraseA = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(RecuperarContraseAPage_1);
    };
    RecuperarContraseAPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    RecuperarContraseAPage.prototype.goToCategorAs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__categor_as_categor_as__["a" /* CategorAsPage */]);
    };
    RecuperarContraseAPage.prototype.goToPlatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__platos_platos__["a" /* PlatosPage */]);
    };
    RecuperarContraseAPage.prototype.goToCrearNuevaCuenta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */]);
    };
    return RecuperarContraseAPage;
}());
RecuperarContraseAPage = RecuperarContraseAPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recuperar-contrase-a',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\recuperar-contrase-a\recuperar-contrase-a.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Recuperar Contraseña\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page15" style="background-color:#E44045;">\n\n  <h4 id="recuperarContraseA-heading10" style="color:#FFFFFF;text-align:center;">\n\n    Ingresa tu correo electrónico para recuperar tu cuenta:\n\n  </h4>\n\n  <form id="recuperarContraseA-form6">\n\n    <ion-item id="recuperarContraseA-input9">\n\n      <ion-label></ion-label>\n\n      <ion-input type="email" placeholder="Correo Electrónico"></ion-input>\n\n    </ion-item>\n\n    <button id="recuperarContraseA-button8" ion-button color="balanced" block on-click="goToLogin()">\n\n      Enviar\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\recuperar-contrase-a\recuperar-contrase-a.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RecuperarContraseAPage);

var RecuperarContraseAPage_1;
//# sourceMappingURL=recuperar-contrase-a.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantesPage = (function () {
    function RestaurantesPage(alertCtrl, navParams, navCtrl, informationService) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.informationService = informationService;
    }
    RestaurantesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.type = this.navParams.get('type');
        this.informationService.getRestaurantByType(this.type).then(function (data) {
            _this.restaurants = data;
        });
    };
    RestaurantesPage.prototype.goToCategorias = function (params) {
        var data = { restaurant: params };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categor_as_categor_as__["a" /* CategorAsPage */], data);
    };
    return RestaurantesPage;
}());
RestaurantesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurantes',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\restaurantes\restaurantes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Restaurantes\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13" style="background-color:#E44045;">\n\n  <ion-list id="restaurantes-list7">\n\n      <ion-item color="assertive" class="text" *ngFor="let restaurant of restaurants" on-tap="goToCategorias(restaurant.name)">\n\n          {{restaurant.name}}\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\restaurantes\restaurantes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */]])
], RestaurantesPage);

//# sourceMappingURL=restaurantes.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoAnteriorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidoAnteriorPage = (function () {
    function PedidoAnteriorPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PedidoAnteriorPage;
}());
PedidoAnteriorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pedido-anterior',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedido-anterior\pedido-anterior.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Pedido Anterior\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page17" style="background-color:#FFFFFF;">\n\n  <h3 id="pedidoAnterior-heading11" style="color:#000000;"></h3>\n\n  <ion-list id="pedidoAnterior-list9">\n\n    <ion-item-sliding>\n\n      <ion-item color="none" id="pedidoAnterior-list-item17">\n\n        Pasta Alfredo\n\n        <ion-note item-right></ion-note>\n\n        <ion-icon name="arrow-back" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="assertive">\n\n          Eliminar\n\n        </button>\n\n        <button ion-button color="energized">\n\n          Comentarios\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n\n      <ion-item color="none" id="pedidoAnterior-list-item18">\n\n        Antipasto de Camarón\n\n        <ion-note item-right></ion-note>\n\n        <ion-icon name="arrow-back" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="assertive">\n\n          Eliminar\n\n        </button>\n\n        <button ion-button color="energized">\n\n          Comentarios\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n\n      <ion-item color="none" id="pedidoAnterior-list-item19">\n\n        Pizza Margherita\n\n        <ion-note item-right></ion-note>\n\n        <ion-icon name="arrow-back" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="assertive">\n\n          Eliminar\n\n        </button>\n\n        <button ion-button color="energized">\n\n          Comentarios\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <div id="pedidoAnterior-markdown7" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Su total:\n\n      <strong>\n\n        Q229.00\n\n      </strong>\n\n    </p>\n\n  </div>\n\n  <button id="pedidoAnterior-button14" ion-button color="balanced" block style="border-radius:5px 5px 5px 5px;">\n\n    Agregar al pedido actual\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedido-anterior\pedido-anterior.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PedidoAnteriorPage);

//# sourceMappingURL=pedido-anterior.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/upload/upload.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoActualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pago_pago__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PedidoActualPage = (function () {
    function PedidoActualPage(navCtrl, userService, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userID = "59f509b3fa11c731b0e6f1de";
        this.totalPrice = 0;
    }
    PedidoActualPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userService.getCartByUser(this.userID).then(function (data) {
            _this.totalPrice = 0;
            _this.cart = data;
            for (var i = 0; i < _this.cart.length; i++) {
                _this.totalPrice += _this.cart[i].price;
            }
        });
    };
    PedidoActualPage.prototype.goToPago = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pago_pago__["a" /* PagoPage */]);
    };
    return PedidoActualPage;
}());
PedidoActualPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pedido-actual',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedido-actual\pedido-actual.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Pedido Actual\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6" style="background-color:#FFFFFF;">\n\n  <h3 id="pedidoActual-heading2" style="color:#000000;"></h3>\n\n  <ion-list id="pedidoActual-list2">\n\n    <ion-item-sliding *ngFor="let item of cart">\n\n      <ion-item color="none" id="pedidoActual-list-item12">\n\n          {{item.name}}\n\n        <ion-note item-right>\n\n          Q.{{item.price}}.00\n\n        </ion-note>\n\n        <ion-icon name="arrow-forward" item-left></ion-icon>\n\n        <p>Arrastrar a la derecha para opciones</p>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger">\n\n          Eliminar\n\n        </button>\n\n        <button ion-button color="energized">\n\n          Comentarios\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <div id="pedidoActual-markdown6" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Su total:\n\n      <strong>\n\n        Q.{{totalPrice}}.00\n\n      </strong>\n\n    </p>\n\n  </div>\n\n  <button id="pedidoActual-button10" ion-button color="danger">\n\n    Eliminar pedido\n\n  </button>\n\n  <button id="pedidoActual-button11" ion-button color="secondary" style="border-radius:5px 5px 5px 5px;" on-click="goToPago()">\n\n    Confirmar pedido\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedido-actual\pedido-actual.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], PedidoActualPage);

var _a, _b, _c, _d;
//# sourceMappingURL=pedido-actual.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesCercanosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantesCercanosPage = (function () {
    function RestaurantesCercanosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return RestaurantesCercanosPage;
}());
RestaurantesCercanosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurantes-cercanos',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\restaurantes-cercanos\restaurantes-cercanos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Restaurantes cercanos\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="refresh"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7"></ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\restaurantes-cercanos\restaurantes-cercanos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RestaurantesCercanosPage);

//# sourceMappingURL=restaurantes-cercanos.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDeFoodiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcercaDeFoodiePage = (function () {
    function AcercaDeFoodiePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AcercaDeFoodiePage.prototype.regresar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    return AcercaDeFoodiePage;
}());
AcercaDeFoodiePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-acerca-de-foodie',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\acerca-de-foodie\acerca-de-foodie.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Acerca de Foodie\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12" style="background-color:#E44045;">\n\n  <div>\n\n    <img src="assets/img/4YXlmJq2QJmn66NNUDHu_393cbbfe-7e66-4655-bd77-6523392375f3.png" style="display:block;width:45%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n  <div id="acercaDeFoodie-markdown2" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:18px;">\n\n      <strong>\n\n        Versión:\n\n      </strong>\n\n      1.0.0\n\n    </p>\n\n  </div>\n\n  <div id="acercaDeFoodie-markdown3" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:18px;">\n\n      <strong>\n\n        Plataformas soportadas:\n\n      </strong>\n\n      Android, iOS y web.\n\n    </p>\n\n  </div>\n\n  <div id="acercaDeFoodie-markdown5" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:18px;">\n\n      <strong>\n\n        Contacto:\n\n      </strong>\n\n      asistenciafoodie@gmail.com\n\n    </p>\n\n  </div>\n\n  <div>\n\n    <a style="display:block;" href-inappbrowser="https://www.facebook.com/">\n\n      <img src="assets/img/IHMjeZ7DSNa75sOzZGB2_facebook-announces-clickable-hashtags--resolution-media-17.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </a>\n\n  </div>\n\n  <div>\n\n    <a style="display:block;" href-inappbrowser="https://twitter.com/">\n\n      <img src="assets/img/D2DWxjarSUOUurWQufjS_twitter-contacto.png" style="display:block;width:19%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </a>\n\n  </div>\n\n  <button id="acercaDeFoodie-button9" ion-button color="stable" icon-left style="color:#FFFFFF;" on-click="regresar()">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n    Regresar al Inicio\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\acerca-de-foodie\acerca-de-foodie.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AcercaDeFoodiePage);

//# sourceMappingURL=acerca-de-foodie.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosDeBSquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultadosDeBSquedaPage = (function () {
    function ResultadosDeBSquedaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResultadosDeBSquedaPage.prototype.regresar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    return ResultadosDeBSquedaPage;
}());
ResultadosDeBSquedaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resultados-de-bsqueda',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\resultados-de-bsqueda\resultados-de-bsqueda.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Resultados de búsqueda\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page16" style="background-color:#E44045;">\n\n  <button id="resultadosDeBSqueda-button16" ion-button color="stable" icon-left style="color:#FFFFFF;" on-click="regresar()">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n    Regresar al Inicio\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\resultados-de-bsqueda\resultados-de-bsqueda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ResultadosDeBSquedaPage);

//# sourceMappingURL=resultados-de-bsqueda.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosRecientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_anterior_pedido_anterior__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosRecientesPage = (function () {
    function PedidosRecientesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PedidosRecientesPage.prototype.goToPedidoAnterior = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pedido_anterior_pedido_anterior__["a" /* PedidoAnteriorPage */]);
    };
    PedidosRecientesPage.prototype.regresar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    return PedidosRecientesPage;
}());
PedidosRecientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pedidos-recientes',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedidos-recientes\pedidos-recientes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Pedidos Recientes\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page18" style="background-color:#E44045;">\n\n  <div id="pedidosRecientes-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      <strong>\n\n        Restaurante\n\n      </strong>\n\n      / fecha\n\n    </p>\n\n  </div>\n\n  <ion-list id="pedidosRecientes-list10">\n\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item21">\n\n      L\'albero\n\n      <ion-note item-right></ion-note>\n\n      <ion-icon name="calendar" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item33">\n\n      Taquiza\n\n      <ion-note item-right></ion-note>\n\n      <ion-icon name="calendar" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item34">\n\n      Lin-lin\n\n      <ion-note item-right></ion-note>\n\n      <ion-icon name="calendar" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item35">\n\n      L\'albero\n\n      <ion-note item-right></ion-note>\n\n      <ion-icon name="calendar" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item36">\n\n      Bill\'s Burgers\n\n      <ion-note item-right></ion-note>\n\n      <ion-icon name="calendar" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:18px;" id="pedidosRecientes-spacer4"></div>\n\n  <button id="pedidosRecientes-button17" ion-button color="assertive" icon-left style="color:#FFFFFF;" on-click="regresar();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n    Regresar al Inicio\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pedidos-recientes\pedidos-recientes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PedidosRecientesPage);

//# sourceMappingURL=pedidos-recientes.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = (function () {
    function PerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PerfilPage.prototype.regresar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Perfil\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page20" style="background-color:#E44045;">\n\n  <form id="perfil-form7">\n\n    <div id="perfil-markdown11" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Nombre Completo\n\n      </p>\n\n    </div>\n\n    <ion-item id="perfil-input12">\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <div id="perfil-markdown12" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Correo Electrónico\n\n      </p>\n\n    </div>\n\n    <ion-item id="perfil-input13">\n\n      \n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <div id="perfil-markdown10" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Contraseña\n\n      </p>\n\n    </div>\n\n    <ion-item id="perfil-input14">\n\n      <ion-input type="password" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div class="spacer" style="width:300px;height:18px;" id="pedidosRecientes-spacer4"></div>\n\n  <button id="pedidosRecientes-button17" ion-button color="assertive" icon-left style="color:#FFFFFF;" on-click="regresar();">\n\n    Confirmar datos\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\perfil\perfil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return UploadPage;
}());
UploadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-upload',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\upload\upload.html"*/'<!--\n\n  Generated template for the UploadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>upload</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<div>\n\n		<img [src]= "imgPath"/>\n\n	</div>\n\n	<ion-item>\n\n		<button ion-button on-click="uploadImg()">Upload Image</button>\n\n	</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\upload\upload.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], UploadPage);

var _a, _b;
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pedido_actual_pedido_actual__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pedido_anterior_pedido_anterior__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_restaurantes_cercanos_restaurantes_cercanos__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_recientes_pedidos_recientes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurantes_restaurantes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_acerca_de_foodie_acerca_de_foodie__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resultados_de_bsqueda_resultados_de_bsqueda__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_plato_plato__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pago_pago__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_information_information__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_users__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_order__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pedido_actual_pedido_actual__["a" /* PedidoActualPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pedido_anterior_pedido_anterior__["a" /* PedidoAnteriorPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_restaurantes_cercanos_restaurantes_cercanos__["a" /* RestaurantesCercanosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_categor_as_categor_as__["a" /* CategorAsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_recientes_pedidos_recientes__["a" /* PedidosRecientesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_platos_platos__["a" /* PlatosPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_acerca_de_foodie_acerca_de_foodie__["a" /* AcercaDeFoodiePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_recuperar_contrase_a_recuperar_contrase_a__["a" /* RecuperarContraseAPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_resultados_de_bsqueda_resultados_de_bsqueda__["a" /* ResultadosDeBSquedaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_plato_plato__["a" /* PlatoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_pago_pago__["a" /* PagoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pedido_actual_pedido_actual__["a" /* PedidoActualPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pedido_anterior_pedido_anterior__["a" /* PedidoAnteriorPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_restaurantes_cercanos_restaurantes_cercanos__["a" /* RestaurantesCercanosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_categor_as_categor_as__["a" /* CategorAsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_recientes_pedidos_recientes__["a" /* PedidosRecientesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_platos_platos__["a" /* PlatosPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_acerca_de_foodie_acerca_de_foodie__["a" /* AcercaDeFoodiePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_recuperar_contrase_a_recuperar_contrase_a__["a" /* RecuperarContraseAPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_resultados_de_bsqueda_resultados_de_bsqueda__["a" /* ResultadosDeBSquedaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_plato_plato__["a" /* PlatoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_pago_pago__["a" /* PagoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_information_information__["a" /* InformationProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_user_users__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_user_order__["a" /* OrderProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acerca_de_foodie_acerca_de_foodie__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resultados_de_bsqueda_resultados_de_bsqueda__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pedido_anterior_pedido_anterior__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedidos_recientes_pedidos_recientes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_restaurantes_restaurantes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pago_pago__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToRestaurantesPage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToRecuperarContraseA = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_recuperar_contrase_a_recuperar_contrase_a__["a" /* RecuperarContraseAPage */]);
    };
    MyApp.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */]);
    };
    MyApp.prototype.goToCategorAs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_categor_as_categor_as__["a" /* CategorAsPage */]);
    };
    MyApp.prototype.goToPlatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_platos_platos__["a" /* PlatosPage */]);
    };
    MyApp.prototype.goToCrearNuevaCuenta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */]);
    };
    MyApp.prototype.goToAcercaDeFoodie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_acerca_de_foodie_acerca_de_foodie__["a" /* AcercaDeFoodiePage */]);
    };
    MyApp.prototype.goToResultadosDeBSqueda = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_resultados_de_bsqueda_resultados_de_bsqueda__["a" /* ResultadosDeBSquedaPage */]);
    };
    MyApp.prototype.goToPedidosRecientes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_pedidos_recientes_pedidos_recientes__["a" /* PedidosRecientesPage */]);
    };
    MyApp.prototype.goToPedidoAnterior = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_pedido_anterior_pedido_anterior__["a" /* PedidoAnteriorPage */]);
    };
    MyApp.prototype.goToPerfil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    MyApp.prototype.goToPago = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_pago_pago__["a" /* PagoPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-content id="side-menu21" style="background-color:#161515;">\n\n    <div>\n\n      <img src="assets/img/Igrk07oTj2oO6H5KWfKg_393cbbfe-7e66-4655-bd77-6523392375f3.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <h3 id="menu-heading1" style="color:#FFFFFF;font-style:italic;text-align:center;">\n\n      Hola, Usuario123.\n\n    </h3>\n\n    <form id="menu-form1">\n\n      <ion-searchbar placeholder="Buscar restaurante" name="" id="menu-search1"></ion-searchbar>\n\n      <button id="menu-button7" ion-button outline color="assertive" block menuClose="" on-click="goToResultadosDeBSqueda()">\n\n        Buscar\n\n      </button>\n\n    </form>\n\n    <ion-list id="menu-list1">\n\n      <ion-item color="assertive" menuClose="" on-click="goToPedidosRecientes()" id="menu-list-item4">\n\n        <ion-icon name="restaurant" item-left></ion-icon>\n\n        Pedidos recientes\n\n      </ion-item>\n\n      <ion-item color="assertive" menuClose="" on-click="goToPedidosRecientes()" id="menu-list-item5">\n\n        <ion-icon name="heart" item-left></ion-icon>\n\n        Mis favoritos\n\n      </ion-item>\n\n      <ion-item color="assertive" menuClose="" on-click="goToPerfil()" id="menu-list-item7">\n\n        <ion-icon name="person" item-left></ion-icon>\n\n        Mi cuenta\n\n      </ion-item>\n\n      <ion-item color="assertive" menuClose="" on-click="goToAcercaDeFoodie()" id="menu-list-item8">\n\n        <ion-icon name="information-circle" item-left></ion-icon>\n\n        Acerca de Foodie©\n\n      </ion-item>\n\n      <ion-item color="assertive" menuClose="" on-click="goToLogin()" id="menu-list-item6">\n\n        <ion-icon name="key" item-left></ion-icon>\n\n        Cerrar Sesión\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatoPage = (function () {
    function PlatoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PlatoPage;
}());
PlatoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-plato',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\plato\plato.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Plato\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page19" style="background-color:#E44045;"></ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\plato\plato.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PlatoPage);

//# sourceMappingURL=plato.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderProvider = (function () {
    function OrderProvider() {
    }
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorAsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategorAsPage = (function () {
    function CategorAsPage(alertCtrl, informationService, navParams, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.informationService = informationService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    CategorAsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.restaurant = this.navParams.get('restaurant');
        this.informationService.getOptionsByRestaurant(this.restaurant).then(function (data) {
            _this.options = data;
        });
    };
    CategorAsPage.prototype.goToMenu = function (params) {
        var data = { restaurant: this.restaurant, option: params };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__platos_platos__["a" /* PlatosPage */], data);
    };
    return CategorAsPage;
}());
CategorAsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categor-as',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\categor-as\categor-as.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Categorías\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9" style="background-color:#E44045;">\n\n  <ion-list id="categorAs-list6">\n\n      <ion-item color="assertive" class="text" *ngFor="let option of options" on-tap="goToMenu(option)">\n\n          {{option}}\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\categor-as\categor-as.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], CategorAsPage);

//# sourceMappingURL=categor-as.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_information_information__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlatosPage = (function () {
    function PlatosPage(informationService, userService, navParams, navCtrl, alertCtrl) {
        this.informationService = informationService;
        this.userService = userService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userID = "59f509b3fa11c731b0e6f1de";
    }
    PlatosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.restaurant = this.navParams.get('restaurant');
        this.option = this.navParams.get('option');
        this.informationService.getMenuByOptions(this.restaurant, this.option).then(function (data) {
            _this.menu = data;
        });
    };
    PlatosPage.prototype.addToCart = function (itemID) {
        this.userService.addToCart(this.userID, itemID);
    };
    return PlatosPage;
}());
PlatosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-platos',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\platos\platos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Platos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14" style="background-color:#E44045;">\n\n  <ion-list id="platos-list8">\n\n    <ion-item-sliding  *ngFor="let plato of menu" block on-click="addToCart(plato._id)">\n\n      <ion-item color="assertive">\n\n        {{plato.name}}\n\n        <ion-note item-right>\n\n          Q.{{plato.price}}.00\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="energized" block on-click="addToCart(plato._id)">\n\n            Agregar al carrito\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\platos\platos.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_information_information__["a" /* InformationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_information_information__["a" /* InformationProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], PlatosPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=platos.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedido_actual_pedido_actual__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restaurantes_cercanos_restaurantes_cercanos__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pago_pago__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsControllerPage = (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__pedido_actual_pedido_actual__["a" /* PedidoActualPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__restaurantes_cercanos_restaurantes_cercanos__["a" /* RestaurantesCercanosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__pago_pago__["a" /* PagoPage */];
    }
    TabsControllerPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
    };
    TabsControllerPage.prototype.goToCategorAs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categor_as_categor_as__["a" /* CategorAsPage */]);
    };
    TabsControllerPage.prototype.goToPlatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__platos_platos__["a" /* PlatosPage */]);
    };
    TabsControllerPage.prototype.oToPedidoActual = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pedido_actual_pedido_actual__["a" /* PedidoActualPage */]);
    };
    TabsControllerPage.prototype.goToRestaurantesCercanos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__restaurantes_cercanos_restaurantes_cercanos__["a" /* RestaurantesCercanosPage */]);
    };
    TabsControllerPage.prototype.goToPago = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pago_pago__["a" /* PagoPage */]);
    };
    return TabsControllerPage;
}());
TabsControllerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home" id="tabsController-tab2"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Mi Pedido" tabIcon="cart" id="tabsController-tab1"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Cerca de ti" tabIcon="pin" id="tabsController-tab3"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\tabs-controller\tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.url = "http://localhost:8080";
        this.data = null;
    }
    UserProvider.prototype.addToCart = function (user, item) {
        var cartData = {
            userID: user,
            itemID: item
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.url + '/api/user/cart', JSON.stringify(cartData), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    UserProvider.prototype.getCartByUser = function (userID) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/api/user/cart/' + userID)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    UserProvider.prototype.getUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/api/user/' + user.email + "/" + user.user)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    UserProvider.prototype.signup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/signup', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.signin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/signin', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res; });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationProvider = (function () {
    function InformationProvider(http) {
        this.http = http;
        this.data = null;
        this.url = "http://localhost:8080";
    }
    InformationProvider.prototype.getTypeRestaurant = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/api/menu')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    InformationProvider.prototype.getRestaurantByType = function (type) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + "/api/menu/" + type)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    InformationProvider.prototype.getOptionsByRestaurant = function (restaurant) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + "/api/menu/type/" + restaurant)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    InformationProvider.prototype.getMenuByOptions = function (restaurant, option) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/api/menu/type/' + restaurant + "/" + option)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return InformationProvider;
}());
InformationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], InformationProvider);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categor_as_categor_as__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platos_platos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_controller_tabs_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;


var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, alertCtrl, usrService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.usrService = usrService;
        this.user = {};
        this.bandSignup = false;
    }
    LoginPage.prototype.signin = function (user) {
        var _this = this;
        if (user) {
            this.usrService.signin(user).subscribe(function (data) {
                if (data.json().message == "Inicio de Sesion.")
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
                else
                    alert(data.json().message);
            });
        }
        else {
            alert("Faltan campos");
        }
    };
    LoginPage.prototype.alert = function (info) {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: info,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.preSignup = function () {
        this.bandSignup = !this.bandSignup;
    };
    LoginPage.prototype.signup = function (user) {
        if (user) {
            this.usrService.signup(user).subscribe(function (res) { alert(res.json().message); });
        }
        else {
            alert("Ingrese todos los campos requeridos.");
        }
    };
    LoginPage.prototype.goToUpload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__upload_upload__["a" /* UploadPage */]);
    };
    LoginPage.prototype.goToRecuperarContraseA = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recuperar_contrase_a_recuperar_contrase_a__["a" /* RecuperarContraseAPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToTabsController = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    LoginPage.prototype.goToCategorAs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categor_as_categor_as__["a" /* CategorAsPage */]);
    };
    LoginPage.prototype.goToPlatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__platos_platos__["a" /* PlatosPage */]);
    };
    LoginPage.prototype.goToCrearNuevaCuenta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\login\login.html"*/'<ion-content padding id="page10" style="background-color:#E44045;">\n\n   <div> \n\n    <img src="assets/img/foodieLogo.png" style="display:block;width:45%;height:auto;margin-left:auto;margin-right:auto;" /> \n\n  </div> \n\n  <h3 id="login-heading8" style="color:#FFFFFF;text-align:center;"> \n\n    ¡Bienvenido a Foodie! \n\n  </h3> \n\n  <form id="login-form2"> \n\n    <ion-list id="login-list4"> \n\n      <ion-item id="login-input1"> \n\n        <ion-label></ion-label> \n\n        <ion-input type="text"  [(ngModel)]="user.username"  name="something" placeholder="Username"></ion-input> \n\n      </ion-item> \n\n      <ion-item id="login-input2" [hidden]="!bandSignup"> \n\n        <ion-label></ion-label> \n\n        <ion-input type="email" [(ngModel)]="user.email"  name="something" placeholder="Correo Electrónico"></ion-input> \n\n      </ion-item> \n\n      <ion-item id="login-input3"> \n\n        <ion-label></ion-label> \n\n        <ion-input type="password" [(ngModel)]="user.password" name="something" placeholder="Contraseña"></ion-input> \n\n      </ion-item> \n\n    </ion-list> \n\n    <button id="login-button1" [hidden]="bandSignup" ion-button color="secondary" block on-click="signin(user)"> \n\n      Iniciar sesión \n\n    </button> \n\n    <button id="login-button2" [hidden]="bandSignup" ion-button color="positive" block on-click="preSignup()"> \n\n      Crear nueva cuenta \n\n    </button> \n\n    <button id="login-button3" [hidden]="!bandSignup" ion-button color="positive" block on-click="signup(user)"> \n\n      Registrarse \n\n    </button> \n\n    <button id="login-button4" [hidden]="!bandSignup" ion-button color="assertive" block on-click="preSignup()"> \n\n      Atras \n\n    </button> \n\n    <button id="login-button5" ion-button color="assertive" block on-click="goToUpload()"> \n\n      Upload IMG \n\n    </button> \n\n    <div class="spacer" style="height:40px;" id="login-spacer3"></div> \n\n    <button id="login-button5" ion-button clear color="assertive" block small style="color:#FFFFFF;font-size:14px;" on-click="goToRecuperarContraseA()"> \n\n      Olvidé mi contraseña \n\n    </button> \n\n  </form> \n\n  <h5 id="login-heading7" style="color:#FFFFFF;font-weight:lighter;font-style:italic;text-align:center;"> \n\n    Foodie© 2017 \n\n  </h5> \n\n</ion-content>'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNuevaCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrearNuevaCuentaPage = (function () {
    function CrearNuevaCuentaPage(navCtrl, alertCtrl, userService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.userInfo = {};
        this.passCon = "";
    }
    CrearNuevaCuentaPage.prototype.validatePassword = function () {
        if (this.passCon != this.userInfo.pass) {
            var alert_1 = this.alertCtrl.create({
                title: "Las contraseñas no coinciden.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.validateEmail();
        }
    };
    CrearNuevaCuentaPage.prototype.validateEmail = function () {
        if (this.userInfo.email.indexOf('@') < 1 || this.userInfo.email.indexOf('.com') < this.userInfo.email.length - 4) {
            var alert_2 = this.alertCtrl.create({
                title: "Email inválido.",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.validateUser();
        }
    };
    CrearNuevaCuentaPage.prototype.validateUser = function () {
        //Validacion que el usuario y el email sea unico
        //createUser(this.userInfo);
    };
    CrearNuevaCuentaPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return CrearNuevaCuentaPage;
}());
CrearNuevaCuentaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crear-nueva-cuenta',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Crear nueva cuenta\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11" style="background-color:#E44045;">\n\n  <h3 id="crearNuevaCuenta-heading9" style="color:#FFFFFF;text-align:center;">\n\n    Ingresa tus datos:\n\n  </h3>\n\n  <form id="crearNuevaCuenta-form3">\n\n    <ion-list id="crearNuevaCuenta-list5">\n\n      <ion-item id="crearNuevaCuenta-input3">\n\n        <ion-label></ion-label>\n\n        <ion-input [(ngModel)] = "userInfo.name" [ngModelOptions]="{standalone: true}" type="text" placeholder="Nombre Completo"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="crearNuevaCuenta-input7">\n\n        <ion-label></ion-label>\n\n        <ion-input [(ngModel)] = "userInfo.user" [ngModelOptions]="{standalone: true}" type="text" placeholder="Usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="crearNuevaCuenta-input4">\n\n        <ion-label></ion-label>\n\n        <ion-input [(ngModel)] = "userInfo.email" [ngModelOptions]="{standalone: true}" type="email" placeholder="Correo Electrónico"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="crearNuevaCuenta-input5">\n\n        <ion-label></ion-label>\n\n        <ion-input [(ngModel)] = "userInfo.pass" [ngModelOptions]="{standalone: true}" type="password" placeholder="Contraseña"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="crearNuevaCuenta-input6">\n\n        <ion-label></ion-label>\n\n        <ion-input [(ngModel)] = "passCon" [ngModelOptions]="{standalone: true}" type="password" placeholder="Confirmar contraseña"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n  <button id="crearNuevaCuenta-button4" ion-button color="balanced" block on-click="validatePassword()">\n\n    Registrarse\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */]])
], CrearNuevaCuentaPage);

//# sourceMappingURL=crear-nueva-cuenta.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurantes_restaurantes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioPage = (function () {
    function InicioPage(navCtrl, informationService) {
        this.navCtrl = navCtrl;
        this.informationService = informationService;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.informationService.getTypeRestaurant().then(function (data) {
            _this.foodTypes = data;
        });
    };
    InicioPage.prototype.goToRestaurants = function (params) {
        var data = { type: params };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__restaurantes_restaurantes__["a" /* RestaurantesPage */], data);
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\inicio\inicio.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Inicio\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5" style="background-color:#E44045;">\n\n  <h3 id="inicio-heading3" style="color:#FFFFFF;text-align:center;">\n\n    ¿De qué tienes ganas?\n\n  </h3>\n\n  <div>\n\n    <img src="assets/img/s3lKYdblQmOqh3JSUHLK_uIy4K9SaSmil1UZLMmJ7_sticker375x360.u2.png" style="display:block;width:15%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n  <div class="spacer" style="width:300px;height:9px;" id="inicio-spacer2"></div>\n\n  <ion-list id="inicio-list3">\n\n    <ion-item color="assertive" class="text" *ngFor="let item of foodTypes" on-tap="goToRestaurants(item.value)">\n\n        {{item.name}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <h5 id="inicio-heading4" style="color:#FFFFFF;font-weight:lighter;font-style:italic;text-align:center;">\n\n    Foodie© 2017\n\n  </h5>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\inicio\inicio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagoPage = (function () {
    function PagoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PagoPage;
}());
PagoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pago',template:/*ion-inline-start:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pago\pago.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Método de Pago\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6" style="background-color:#ffffff; font-family: Noto Sans; font-size:medium">\n\n<div class="logos">  \n\n    <img src="assets/img/creditcard.png" style="width:80px; height:80px">\n\n    <img src="assets/img/debitcard.png" style="width:80px; height:80px">\n\n    <img src="assets/img/efectivo.png" style="width:80px; height:80px">\n\n</div> \n\n<br>\n\n<br>\n\n<form>   \n\n    <ion-list id="listaTarjeta" >\n\n        <ion-item>\n\n          <ion-label color="primary">Nombre en la tarjeta</ion-label>\n\n          <ion-input placeholder="Escriba aquí"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary">Número tarjeta</ion-label>\n\n          <ion-input placeholder="Escriba aquí"></ion-input>\n\n        </ion-item>\n\n        <ion-item>  \n\n          <ion-label color="primary">Fecha de vencimiento</ion-label>\n\n          <ion-input type="date"  placeholder="Text Input"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n</form>\n\n<br>\n\n<button id="login-button1" ion-button color="secondary">\n\n    Confirmar Pago\n\n</button>\n\n<br>\n\n<button id="login-button1" large ion-button color="primary">\n\n  Pagar en efectivo\n\n</button>\n\n\n\n\n\n  \n\n'/*ion-inline-end:"C:\Users\WadeOwen\Documents\GitHub\Foodie\App\src\pages\pago\pago.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PagoPage);

//# sourceMappingURL=pago.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map