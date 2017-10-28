webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarContraseAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(54);
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
        selector: 'page-recuperar-contrase-a',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\recuperar-contrase-a\recuperar-contrase-a.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Recuperar Contraseña\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15" style="background-color:#E44045;">\n  <h4 id="recuperarContraseA-heading10" style="color:#FFFFFF;text-align:center;">\n    Ingresa tu correo electrónico para recuperar tu cuenta:\n  </h4>\n  <form id="recuperarContraseA-form6">\n    <ion-item id="recuperarContraseA-input9">\n      <ion-label></ion-label>\n      <ion-input type="email" placeholder="Correo Electrónico"></ion-input>\n    </ion-item>\n    <button id="recuperarContraseA-button8" ion-button color="balanced" block on-click="goToLogin()">\n      Enviar\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\recuperar-contrase-a\recuperar-contrase-a.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RecuperarContraseAPage);

var RecuperarContraseAPage_1;
//# sourceMappingURL=recuperar-contrase-a.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(42);
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
        selector: 'page-restaurantes',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\restaurantes\restaurantes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Restaurantes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13" style="background-color:#E44045;">\n  <ion-list id="restaurantes-list7">\n      <ion-item color="assertive" class="text" *ngFor="let restaurant of restaurants" on-tap="goToCategorias(restaurant.name)">\n          {{restaurant.name}}\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\restaurantes\restaurantes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */]])
], RestaurantesPage);

//# sourceMappingURL=restaurantes.js.map

/***/ }),

/***/ 110:
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
        selector: 'page-pedido-anterior',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedido-anterior\pedido-anterior.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Pedido Anterior\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page17" style="background-color:#FFFFFF;">\n  <h3 id="pedidoAnterior-heading11" style="color:#000000;"></h3>\n  <ion-list id="pedidoAnterior-list9">\n    <ion-item-sliding>\n      <ion-item color="none" id="pedidoAnterior-list-item17">\n        Pasta Alfredo\n        <ion-note item-right></ion-note>\n        <ion-icon name="arrow-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive">\n          Eliminar\n        </button>\n        <button ion-button color="energized">\n          Comentarios\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="pedidoAnterior-list-item18">\n        Antipasto de Camarón\n        <ion-note item-right></ion-note>\n        <ion-icon name="arrow-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive">\n          Eliminar\n        </button>\n        <button ion-button color="energized">\n          Comentarios\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="pedidoAnterior-list-item19">\n        Pizza Margherita\n        <ion-note item-right></ion-note>\n        <ion-icon name="arrow-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive">\n          Eliminar\n        </button>\n        <button ion-button color="energized">\n          Comentarios\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div id="pedidoAnterior-markdown7" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Su total:\n      <strong>\n        Q229.00\n      </strong>\n    </p>\n  </div>\n  <button id="pedidoAnterior-button14" ion-button color="balanced" block style="border-radius:5px 5px 5px 5px;">\n    Agregar al pedido actual\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedido-anterior\pedido-anterior.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PedidoAnteriorPage);

//# sourceMappingURL=pedido-anterior.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(108);
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
    UserProvider.prototype.createUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.url + '/api/user', JSON.stringify(user), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoActualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pago_pago__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(205);
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
        this.userID = "59f254ae3ddb192a3c18e7da";
    }
    PedidoActualPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getCartByUser(this.userID).then(function (data) {
            _this.cart = data;
        });
        var alert = this.alertCtrl.create({
            title: this.cart,
            buttons: ['Dismiss']
        });
        alert.present();
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
        selector: 'page-pedido-actual',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedido-actual\pedido-actual.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Pedido Actual\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6" style="background-color:#FFFFFF;">\n  <h3 id="pedidoActual-heading2" style="color:#000000;"></h3>\n  <ion-list id="pedidoActual-list2">\n    <ion-item-sliding *ngFor="let item of cart">\n      <ion-item color="none" id="pedidoActual-list-item12">\n          {{item}}\n        <ion-note item-right>\n          Q72.00\n        </ion-note>\n        <ion-icon name="arrow-forward" item-left></ion-icon>\n        <p>Arrastrar a la derecha para opciones</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="danger">\n          Eliminar\n        </button>\n        <button ion-button color="energized">\n          Comentarios\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div id="pedidoActual-markdown6" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Su total:\n      <strong>\n        Q229.00\n      </strong>\n    </p>\n  </div>\n  <button id="pedidoActual-button10" ion-button color="danger">\n    Eliminar pedido\n  </button>\n  <button id="pedidoActual-button11" ion-button color="secondary" style="border-radius:5px 5px 5px 5px;" on-click="goToPago()">\n    Confirmar pedido\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedido-actual\pedido-actual.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PedidoActualPage);

//# sourceMappingURL=pedido-actual.js.map

/***/ }),

/***/ 207:
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
        selector: 'page-restaurantes-cercanos',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\restaurantes-cercanos\restaurantes-cercanos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Restaurantes cercanos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7"></ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\restaurantes-cercanos\restaurantes-cercanos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RestaurantesCercanosPage);

//# sourceMappingURL=restaurantes-cercanos.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDeFoodiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(33);
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
        selector: 'page-acerca-de-foodie',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\acerca-de-foodie\acerca-de-foodie.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Acerca de Foodie\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12" style="background-color:#E44045;">\n  <div>\n    <img src="assets/img/4YXlmJq2QJmn66NNUDHu_393cbbfe-7e66-4655-bd77-6523392375f3.png" style="display:block;width:45%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <div id="acercaDeFoodie-markdown2" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:18px;">\n      <strong>\n        Versión:\n      </strong>\n      1.0.0\n    </p>\n  </div>\n  <div id="acercaDeFoodie-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:18px;">\n      <strong>\n        Plataformas soportadas:\n      </strong>\n      Android, iOS y web.\n    </p>\n  </div>\n  <div id="acercaDeFoodie-markdown5" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:18px;">\n      <strong>\n        Contacto:\n      </strong>\n      asistenciafoodie@gmail.com\n    </p>\n  </div>\n  <div>\n    <a style="display:block;" href-inappbrowser="https://www.facebook.com/">\n      <img src="assets/img/IHMjeZ7DSNa75sOzZGB2_facebook-announces-clickable-hashtags--resolution-media-17.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n    </a>\n  </div>\n  <div>\n    <a style="display:block;" href-inappbrowser="https://twitter.com/">\n      <img src="assets/img/D2DWxjarSUOUurWQufjS_twitter-contacto.png" style="display:block;width:19%;height:auto;margin-left:auto;margin-right:auto;" />\n    </a>\n  </div>\n  <button id="acercaDeFoodie-button9" ion-button color="stable" icon-left style="color:#FFFFFF;" on-click="regresar()">\n    <ion-icon name="arrow-back"></ion-icon>\n    Regresar al Inicio\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\acerca-de-foodie\acerca-de-foodie.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AcercaDeFoodiePage);

//# sourceMappingURL=acerca-de-foodie.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosDeBSquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(33);
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
        selector: 'page-resultados-de-bsqueda',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\resultados-de-bsqueda\resultados-de-bsqueda.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Resultados de búsqueda\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page16" style="background-color:#E44045;">\n  <button id="resultadosDeBSqueda-button16" ion-button color="stable" icon-left style="color:#FFFFFF;" on-click="regresar()">\n    <ion-icon name="arrow-back"></ion-icon>\n    Regresar al Inicio\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\resultados-de-bsqueda\resultados-de-bsqueda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ResultadosDeBSquedaPage);

//# sourceMappingURL=resultados-de-bsqueda.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosRecientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_anterior_pedido_anterior__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(33);
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
        selector: 'page-pedidos-recientes',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedidos-recientes\pedidos-recientes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Pedidos Recientes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page18" style="background-color:#E44045;">\n  <div id="pedidosRecientes-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      <strong>\n        Restaurante\n      </strong>\n      / fecha\n    </p>\n  </div>\n  <ion-list id="pedidosRecientes-list10">\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item21">\n      L\'albero\n      <ion-note item-right></ion-note>\n      <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item33">\n      Taquiza\n      <ion-note item-right></ion-note>\n      <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item34">\n      Lin-lin\n      <ion-note item-right></ion-note>\n      <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item35">\n      L\'albero\n      <ion-note item-right></ion-note>\n      <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToPedidoAnterior()" id="pedidosRecientes-list-item36">\n      Bill\'s Burgers\n      <ion-note item-right></ion-note>\n      <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:18px;" id="pedidosRecientes-spacer4"></div>\n  <button id="pedidosRecientes-button17" ion-button color="assertive" icon-left style="color:#FFFFFF;" on-click="regresar();">\n    <ion-icon name="arrow-back"></ion-icon>\n    Regresar al Inicio\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pedidos-recientes\pedidos-recientes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PedidosRecientesPage);

//# sourceMappingURL=pedidos-recientes.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(33);
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
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page20" style="background-color:#E44045;">\n  <form id="perfil-form7">\n    <div id="perfil-markdown11" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Nombre Completo\n      </p>\n    </div>\n    <ion-item id="perfil-input12">\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div id="perfil-markdown12" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Correo Electrónico\n      </p>\n    </div>\n    <ion-item id="perfil-input13">\n      \n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div id="perfil-markdown10" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Contraseña\n      </p>\n    </div>\n    <ion-item id="perfil-input14">\n      <ion-input type="password" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:300px;height:18px;" id="pedidosRecientes-spacer4"></div>\n  <button id="pedidosRecientes-button17" ion-button color="assertive" icon-left style="color:#FFFFFF;" on-click="regresar();">\n    Confirmar datos\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\perfil\perfil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pedido_actual_pedido_actual__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pedido_anterior_pedido_anterior__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_restaurantes_cercanos_restaurantes_cercanos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_recientes_pedidos_recientes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurantes_restaurantes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_acerca_de_foodie_acerca_de_foodie__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resultados_de_bsqueda_resultados_de_bsqueda__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_plato_plato__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_perfil_perfil__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pago_pago__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_information_information__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_users__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_order__ = __webpack_require__(281);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
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

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acerca_de_foodie_acerca_de_foodie__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resultados_de_bsqueda_resultados_de_bsqueda__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pedido_anterior_pedido_anterior__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedidos_recientes_pedidos_recientes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_perfil_perfil__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_restaurantes_restaurantes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pago_pago__ = __webpack_require__(56);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-content id="side-menu21" style="background-color:#161515;">\n    <div>\n      <img src="assets/img/Igrk07oTj2oO6H5KWfKg_393cbbfe-7e66-4655-bd77-6523392375f3.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <h3 id="menu-heading1" style="color:#FFFFFF;font-style:italic;text-align:center;">\n      Hola, Usuario123.\n    </h3>\n    <form id="menu-form1">\n      <ion-searchbar placeholder="Buscar restaurante" name="" id="menu-search1"></ion-searchbar>\n      <button id="menu-button7" ion-button outline color="assertive" block menuClose="" on-click="goToResultadosDeBSqueda()">\n        Buscar\n      </button>\n    </form>\n    <ion-list id="menu-list1">\n      <ion-item color="assertive" menuClose="" on-click="goToPedidosRecientes()" id="menu-list-item4">\n        <ion-icon name="restaurant" item-left></ion-icon>\n        Pedidos recientes\n      </ion-item>\n      <ion-item color="assertive" menuClose="" on-click="goToPedidosRecientes()" id="menu-list-item5">\n        <ion-icon name="heart" item-left></ion-icon>\n        Mis favoritos\n      </ion-item>\n      <ion-item color="assertive" menuClose="" on-click="goToPerfil()" id="menu-list-item7">\n        <ion-icon name="person" item-left></ion-icon>\n        Mi cuenta\n      </ion-item>\n      <ion-item color="assertive" menuClose="" on-click="goToAcercaDeFoodie()" id="menu-list-item8">\n        <ion-icon name="information-circle" item-left></ion-icon>\n        Acerca de Foodie©\n      </ion-item>\n      <ion-item color="assertive" menuClose="" on-click="goToLogin()" id="menu-list-item6">\n        <ion-icon name="key" item-left></ion-icon>\n        Cerrar Sesión\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
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
        selector: 'page-plato',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\plato\plato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Plato\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page19" style="background-color:#E44045;"></ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\plato\plato.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PlatoPage);

//# sourceMappingURL=plato.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(108);
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorAsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(42);
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
        selector: 'page-categor-as',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\categor-as\categor-as.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Categorías\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9" style="background-color:#E44045;">\n  <ion-list id="categorAs-list6">\n      <ion-item color="assertive" class="text" *ngFor="let option of options" on-tap="goToMenu(option)">\n          {{option}}\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\categor-as\categor-as.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CategorAsPage);

//# sourceMappingURL=categor-as.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_information_information__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(205);
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
        this.userID = "59f254ae3ddb192a3c18e7da";
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
        selector: 'page-platos',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\platos\platos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Platos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14" style="background-color:#E44045;">\n  <ion-list id="platos-list8">\n    <ion-item-sliding  *ngFor="let plato of menu" block on-click="addToCart(plato._id)">\n      <ion-item color="assertive">\n        {{plato.name}}\n        <ion-note item-right>\n          Q.{{plato.price}}.00\n        </ion-note>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="energized" block on-click="addToCart(plato._id)">\n            Agregar al carrito\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\platos\platos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_information_information__["a" /* InformationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PlatosPage);

//# sourceMappingURL=platos.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedido_actual_pedido_actual__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restaurantes_cercanos_restaurantes_cercanos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pago_pago__ = __webpack_require__(56);
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
        selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Mi Pedido" tabIcon="cart" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cerca de ti" tabIcon="pin" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\tabs-controller\tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(108);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recuperar_contrase_a_recuperar_contrase_a__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categor_as_categor_as__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platos_platos__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_controller_tabs_controller__ = __webpack_require__(33);
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
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToRecuperarContraseA = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recuperar_contrase_a_recuperar_contrase_a__["a" /* RecuperarContraseAPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToTabsController = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    LoginPage.prototype.goToCategorAs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categor_as_categor_as__["a" /* CategorAsPage */]);
    };
    LoginPage.prototype.goToPlatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__platos_platos__["a" /* PlatosPage */]);
    };
    LoginPage.prototype.goToCrearNuevaCuenta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\login\login.html"*/'<ion-content padding id="page10" style="background-color:#E44045;">\n  <div>\n    <img src="assets/img/4YXlmJq2QJmn66NNUDHu_393cbbfe-7e66-4655-bd77-6523392375f3.png" style="display:block;width:45%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <h3 id="login-heading8" style="color:#FFFFFF;text-align:center;">\n    ¡Bienvenido a Foodie!\n  </h3>\n  <form id="login-form2">\n    <ion-list id="login-list4">\n      <ion-item id="login-input1">\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Correo Electrónico" name="Email"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label></ion-label>\n        <ion-input type="password" placeholder="Contraseña" name="Password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="login-button1" ion-button color="secondary" block on-click="goToTabsController()">\n      Iniciar sesión\n    </button>\n    <button id="login-button3" ion-button color="primary" block on-click="goToCrearNuevaCuenta()">\n      Crear nueva cuenta\n    </button>\n    <div class="spacer" style="height:40px;" id="login-spacer3"></div>\n    <button id="login-button5" ion-button clear color="assertive" block small style="color:#FFFFFF;font-size:14px;" on-click="goToRecuperarContraseA()">\n      Olvidé mi contraseña\n    </button>\n  </form>\n  <h5 id="login-heading7" style="color:#FFFFFF;font-weight:lighter;font-style:italic;text-align:center;">\n    Foodie© 2017\n  </h5>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNuevaCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_users__ = __webpack_require__(205);
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
        selector: 'page-crear-nueva-cuenta',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Crear nueva cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11" style="background-color:#E44045;">\n  <h3 id="crearNuevaCuenta-heading9" style="color:#FFFFFF;text-align:center;">\n    Ingresa tus datos:\n  </h3>\n  <form id="crearNuevaCuenta-form3">\n    <ion-list id="crearNuevaCuenta-list5">\n      <ion-item id="crearNuevaCuenta-input3">\n        <ion-label></ion-label>\n        <ion-input [(ngModel)] = "userInfo.name" [ngModelOptions]="{standalone: true}" type="text" placeholder="Nombre Completo"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input7">\n        <ion-label></ion-label>\n        <ion-input [(ngModel)] = "userInfo.user" [ngModelOptions]="{standalone: true}" type="text" placeholder="Usuario"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input4">\n        <ion-label></ion-label>\n        <ion-input [(ngModel)] = "userInfo.email" [ngModelOptions]="{standalone: true}" type="email" placeholder="Correo Electrónico"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input5">\n        <ion-label></ion-label>\n        <ion-input [(ngModel)] = "userInfo.pass" [ngModelOptions]="{standalone: true}" type="password" placeholder="Contraseña"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input6">\n        <ion-label></ion-label>\n        <ion-input [(ngModel)] = "passCon" [ngModelOptions]="{standalone: true}" type="password" placeholder="Confirmar contraseña"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n  <button id="crearNuevaCuenta-button4" ion-button color="balanced" block on-click="validatePassword()">\n    Registrarse\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_users__["a" /* UserProvider */]])
], CrearNuevaCuentaPage);

//# sourceMappingURL=crear-nueva-cuenta.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurantes_restaurantes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_information_information__ = __webpack_require__(42);
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
        selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\inicio\inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5" style="background-color:#E44045;">\n  <h3 id="inicio-heading3" style="color:#FFFFFF;text-align:center;">\n    ¿De qué tienes ganas?\n  </h3>\n  <div>\n    <img src="assets/img/s3lKYdblQmOqh3JSUHLK_uIy4K9SaSmil1UZLMmJ7_sticker375x360.u2.png" style="display:block;width:15%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <div class="spacer" style="width:300px;height:9px;" id="inicio-spacer2"></div>\n  <ion-list id="inicio-list3">\n    <ion-item color="assertive" class="text" *ngFor="let item of foodTypes" on-tap="goToRestaurants(item.value)">\n        {{item.name}}\n    </ion-item>\n  </ion-list>\n  <h5 id="inicio-heading4" style="color:#FFFFFF;font-weight:lighter;font-style:italic;text-align:center;">\n    Foodie© 2017\n  </h5>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\inicio\inicio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_information_information__["a" /* InformationProvider */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 56:
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
        selector: 'page-pago',template:/*ion-inline-start:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pago\pago.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Método de Pago\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6" style="background-color:#ffffff; font-family: Noto Sans; font-size:medium">\n<div class="logos">  \n    <img src="assets/img/creditcard.png" style="width:80px; height:80px">\n    <img src="assets/img/debitcard.png" style="width:80px; height:80px">\n    <img src="assets/img/efectivo.png" style="width:80px; height:80px">\n</div> \n<br>\n<br>\n<form>   \n    <ion-list id="listaTarjeta" >\n        <ion-item>\n          <ion-label color="primary">Nombre en la tarjeta</ion-label>\n          <ion-input placeholder="Escriba aquí"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Número tarjeta</ion-label>\n          <ion-input placeholder="Escriba aquí"></ion-input>\n        </ion-item>\n        <ion-item>  \n          <ion-label color="primary">Fecha de vencimiento</ion-label>\n          <ion-input type="date"  placeholder="Text Input"></ion-input>\n        </ion-item>\n    </ion-list>\n</form>\n<br>\n<button id="login-button1" ion-button color="secondary">\n    Confirmar Pago\n</button>\n<br>\n<button id="login-button1" large ion-button color="primary">\n  Pagar en efectivo\n</button>\n\n\n  \n'/*ion-inline-end:"C:\Users\user\Documents\UVG\Sexto Semestre\Ing. Software\sprint4\prueba 1\proyectazo\src\pages\pago\pago.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PagoPage);

//# sourceMappingURL=pago.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map