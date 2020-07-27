function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["title-title-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/title/title.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hello/title/title.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelloTitleTitlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>title</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <h1>Página interna dentro de hello</h1>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/hello/title/title-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/hello/title/title-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TitlePageRoutingModule */

  /***/
  function srcAppHelloTitleTitleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageRoutingModule", function () {
      return TitlePageRoutingModule;
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


    var _title_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/hello/title/title.page.ts");

    var routes = [{
      path: '',
      component: _title_page__WEBPACK_IMPORTED_MODULE_3__["TitlePage"]
    }];

    var TitlePageRoutingModule = function TitlePageRoutingModule() {
      _classCallCheck(this, TitlePageRoutingModule);
    };

    TitlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TitlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/hello/title/title.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/hello/title/title.module.ts ***!
    \*********************************************/

  /*! exports provided: TitlePageModule */

  /***/
  function srcAppHelloTitleTitleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageModule", function () {
      return TitlePageModule;
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


    var _title_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./title-routing.module */
    "./src/app/hello/title/title-routing.module.ts");
    /* harmony import */


    var _title_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/hello/title/title.page.ts");

    var TitlePageModule = function TitlePageModule() {
      _classCallCheck(this, TitlePageModule);
    };

    TitlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _title_routing_module__WEBPACK_IMPORTED_MODULE_5__["TitlePageRoutingModule"]],
      declarations: [_title_page__WEBPACK_IMPORTED_MODULE_6__["TitlePage"]]
    })], TitlePageModule);
    /***/
  },

  /***/
  "./src/app/hello/title/title.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/hello/title/title.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelloTitleTitlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbGxvL3RpdGxlL3RpdGxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/hello/title/title.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/hello/title/title.page.ts ***!
    \*******************************************/

  /*! exports provided: TitlePage */

  /***/
  function srcAppHelloTitleTitlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePage", function () {
      return TitlePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TitlePage = /*#__PURE__*/function () {
      function TitlePage() {
        _classCallCheck(this, TitlePage);
      }

      _createClass(TitlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TitlePage;
    }();

    TitlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./title.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hello/title/title.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./title.page.scss */
      "./src/app/hello/title/title.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TitlePage);
    /***/
  }
}]);
//# sourceMappingURL=title-title-module-es5.js.map