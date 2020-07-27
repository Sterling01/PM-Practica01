function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentacion-presentacion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentacionPresentacionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>presentacion</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Hoja de Vida</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <h3>Datos personales</h3>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Cédula</ion-label>\r\n    <ion-label position=\"fixed\">{{person.cedula}}</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Nombre</ion-label>\r\n    <ion-label position=\"fixed\">{{person.nombre}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Dirección</ion-label>\r\n    <ion-label position=\"fixed\">{{person.direccion}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Fecha de Nacimiento</ion-label>\r\n    <ion-label position=\"fixed\">{{person.fechaNacimiento}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Sexo</ion-label>\r\n    <ion-label position=\"fixed\">{{person.sexo}}</ion-label>    \r\n  </ion-item>\r\n\r\n  <h3>Experiencia Laboral</h3>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Cargo</ion-label>\r\n    <ion-label position=\"fixed\">{{trabajo.cargo}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Funciones desempeñadas</ion-label>\r\n    <ion-label position=\"fixed\">{{trabajo.funciones}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Tiempo</ion-label>\r\n    <ion-label position=\"fixed\">{{trabajo.tiempo}}</ion-label>    \r\n  </ion-item>\r\n\r\n  <h3>Estudios</h3>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Título de tercer nivel</ion-label>\r\n    <ion-label position=\"fixed\">{{estudio.tituloTercer}}</ion-label>    \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\">Título de cuarto nivel</ion-label>\r\n    <ion-label position=\"fixed\">{{estudio.tituloCuarto}}</ion-label>    \r\n  </ion-item>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/presentacion/presentacion-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PresentacionPageRoutingModule */

  /***/
  function srcAppPresentacionPresentacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentacionPageRoutingModule", function () {
      return PresentacionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _presentacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./presentacion.page */
    "./src/app/presentacion/presentacion.page.ts");

    var routes = [{
      path: '',
      component: _presentacion_page__WEBPACK_IMPORTED_MODULE_3__["PresentacionPage"]
    }];

    var PresentacionPageRoutingModule = function PresentacionPageRoutingModule() {
      _classCallCheck(this, PresentacionPageRoutingModule);
    };

    PresentacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PresentacionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/presentacion/presentacion.module.ts ***!
    \*****************************************************/

  /*! exports provided: PresentacionPageModule */

  /***/
  function srcAppPresentacionPresentacionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentacionPageModule", function () {
      return PresentacionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _presentacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./presentacion-routing.module */
    "./src/app/presentacion/presentacion-routing.module.ts");
    /* harmony import */


    var _presentacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./presentacion.page */
    "./src/app/presentacion/presentacion.page.ts");

    var PresentacionPageModule = function PresentacionPageModule() {
      _classCallCheck(this, PresentacionPageModule);
    };

    PresentacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _presentacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresentacionPageRoutingModule"]],
      declarations: [_presentacion_page__WEBPACK_IMPORTED_MODULE_6__["PresentacionPage"]]
    })], PresentacionPageModule);
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/presentacion/presentacion.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentacionPresentacionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhY2lvbi9wcmVzZW50YWNpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/presentacion/presentacion.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/presentacion/presentacion.page.ts ***!
    \***************************************************/

  /*! exports provided: PresentacionPage */

  /***/
  function srcAppPresentacionPresentacionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentacionPage", function () {
      return PresentacionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PresentacionPage = /*#__PURE__*/function () {
      function PresentacionPage(route, router) {
        _classCallCheck(this, PresentacionPage);

        this.route = route;
        this.router = router;
      }

      _createClass(PresentacionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.person = _this.router.getCurrentNavigation().extras.state.person;
              _this.trabajo = _this.router.getCurrentNavigation().extras.state.trabajo;
              _this.estudio = _this.router.getCurrentNavigation().extras.state.estudio;
            }
          });
        }
      }]);

      return PresentacionPage;
    }();

    PresentacionPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PresentacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-presentacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./presentacion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/presentacion/presentacion.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./presentacion.page.scss */
      "./src/app/presentacion/presentacion.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], PresentacionPage);
    /***/
  }
}]);
//# sourceMappingURL=presentacion-presentacion-module-es5.js.map