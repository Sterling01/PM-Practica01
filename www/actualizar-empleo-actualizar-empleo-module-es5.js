function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actualizar-empleo-actualizar-empleo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/actualizar-empleo/actualizar-empleo.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actualizar-empleo/actualizar-empleo.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActualizarEmpleoActualizarEmpleoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>actualizar-empleo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n    <ion-item>\n      <ion-label position=\"stacked\">Titulo <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.titulo\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Descripcion<ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-textarea [(ngModel)]=\"empleo.descripcion\"></ion-textarea>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">Salario<ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.salario\"></ion-input>\n    </ion-item>\n    \n  </ion-list>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"actualizarEmpleo()\">Editar</ion-button>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/actualizar-empleo/actualizar-empleo-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/actualizar-empleo/actualizar-empleo-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ActualizarEmpleoPageRoutingModule */

  /***/
  function srcAppActualizarEmpleoActualizarEmpleoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActualizarEmpleoPageRoutingModule", function () {
      return ActualizarEmpleoPageRoutingModule;
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


    var _actualizar_empleo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./actualizar-empleo.page */
    "./src/app/actualizar-empleo/actualizar-empleo.page.ts");

    var routes = [{
      path: '',
      component: _actualizar_empleo_page__WEBPACK_IMPORTED_MODULE_3__["ActualizarEmpleoPage"]
    }];

    var ActualizarEmpleoPageRoutingModule = function ActualizarEmpleoPageRoutingModule() {
      _classCallCheck(this, ActualizarEmpleoPageRoutingModule);
    };

    ActualizarEmpleoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActualizarEmpleoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/actualizar-empleo/actualizar-empleo.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/actualizar-empleo/actualizar-empleo.module.ts ***!
    \***************************************************************/

  /*! exports provided: ActualizarEmpleoPageModule */

  /***/
  function srcAppActualizarEmpleoActualizarEmpleoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActualizarEmpleoPageModule", function () {
      return ActualizarEmpleoPageModule;
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


    var _actualizar_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./actualizar-empleo-routing.module */
    "./src/app/actualizar-empleo/actualizar-empleo-routing.module.ts");
    /* harmony import */


    var _actualizar_empleo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actualizar-empleo.page */
    "./src/app/actualizar-empleo/actualizar-empleo.page.ts");

    var ActualizarEmpleoPageModule = function ActualizarEmpleoPageModule() {
      _classCallCheck(this, ActualizarEmpleoPageModule);
    };

    ActualizarEmpleoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _actualizar_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActualizarEmpleoPageRoutingModule"]],
      declarations: [_actualizar_empleo_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarEmpleoPage"]]
    })], ActualizarEmpleoPageModule);
    /***/
  },

  /***/
  "./src/app/actualizar-empleo/actualizar-empleo.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/actualizar-empleo/actualizar-empleo.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActualizarEmpleoActualizarEmpleoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbGl6YXItZW1wbGVvL2FjdHVhbGl6YXItZW1wbGVvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/actualizar-empleo/actualizar-empleo.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/actualizar-empleo/actualizar-empleo.page.ts ***!
    \*************************************************************/

  /*! exports provided: ActualizarEmpleoPage */

  /***/
  function srcAppActualizarEmpleoActualizarEmpleoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActualizarEmpleoPage", function () {
      return ActualizarEmpleoPage;
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


    var _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/empleos.service */
    "./src/app/shared/services/empleos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ActualizarEmpleoPage = /*#__PURE__*/function () {
      function ActualizarEmpleoPage(empleosService, route, router) {
        _classCallCheck(this, ActualizarEmpleoPage);

        this.empleosService = empleosService;
        this.route = route;
        this.router = router;
      }

      _createClass(ActualizarEmpleoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.route.snapshot.paramMap.get("id");
          this.empleo = this.empleosService.getEmpleo(id);
          var receivedEmpleo;
          this.empleo.subscribe(function (data) {
            receivedEmpleo = data;
            _this.empleo = receivedEmpleo;
          });
        }
      }, {
        key: "actualizarEmpleo",
        value: function actualizarEmpleo() {
          //console.log(this.empleo)
          this.empleosService.updateEmpleo(this.empleo);
          this.router.navigate(['lista-empleos']);
        }
      }]);

      return ActualizarEmpleoPage;
    }();

    ActualizarEmpleoPage.ctorParameters = function () {
      return [{
        type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ActualizarEmpleoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-actualizar-empleo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./actualizar-empleo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/actualizar-empleo/actualizar-empleo.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./actualizar-empleo.page.scss */
      "./src/app/actualizar-empleo/actualizar-empleo.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ActualizarEmpleoPage);
    /***/
  }
}]);
//# sourceMappingURL=actualizar-empleo-actualizar-empleo-module-es5.js.map