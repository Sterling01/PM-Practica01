function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acercade-acercade-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/acercade/acercade.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acercade/acercade.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAcercadeAcercadePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>acercade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h3>App Hoja de Vida</h3>\n  <ion-label position=\"fixed\">Aplicación que permite el ingreso de datos de el curriculum de una persona\n    distinguiendo la información a tomar en cuenta si tiene o no experiencia laboral.</ion-label>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/acercade/acercade-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/acercade/acercade-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AcercadePageRoutingModule */

  /***/
  function srcAppAcercadeAcercadeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercadePageRoutingModule", function () {
      return AcercadePageRoutingModule;
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


    var _acercade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./acercade.page */
    "./src/app/acercade/acercade.page.ts");

    var routes = [{
      path: '',
      component: _acercade_page__WEBPACK_IMPORTED_MODULE_3__["AcercadePage"]
    }];

    var AcercadePageRoutingModule = function AcercadePageRoutingModule() {
      _classCallCheck(this, AcercadePageRoutingModule);
    };

    AcercadePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AcercadePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/acercade/acercade.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/acercade/acercade.module.ts ***!
    \*********************************************/

  /*! exports provided: AcercadePageModule */

  /***/
  function srcAppAcercadeAcercadeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercadePageModule", function () {
      return AcercadePageModule;
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


    var _acercade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./acercade-routing.module */
    "./src/app/acercade/acercade-routing.module.ts");
    /* harmony import */


    var _acercade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./acercade.page */
    "./src/app/acercade/acercade.page.ts");

    var AcercadePageModule = function AcercadePageModule() {
      _classCallCheck(this, AcercadePageModule);
    };

    AcercadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _acercade_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcercadePageRoutingModule"]],
      declarations: [_acercade_page__WEBPACK_IMPORTED_MODULE_6__["AcercadePage"]]
    })], AcercadePageModule);
    /***/
  },

  /***/
  "./src/app/acercade/acercade.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/acercade/acercade.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAcercadeAcercadePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjZXJjYWRlL2FjZXJjYWRlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/acercade/acercade.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/acercade/acercade.page.ts ***!
    \*******************************************/

  /*! exports provided: AcercadePage */

  /***/
  function srcAppAcercadeAcercadePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercadePage", function () {
      return AcercadePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AcercadePage = /*#__PURE__*/function () {
      function AcercadePage() {
        _classCallCheck(this, AcercadePage);
      }

      _createClass(AcercadePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AcercadePage;
    }();

    AcercadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acercade',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acercade.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/acercade/acercade.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./acercade.page.scss */
      "./src/app/acercade/acercade.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AcercadePage);
    /***/
  }
}]);
//# sourceMappingURL=acercade-acercade-module-es5.js.map