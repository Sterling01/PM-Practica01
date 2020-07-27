function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-empleo-crear-empleo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageUploadImageUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button size=\"small\" (click)=\"captureAndUpload()\">\r\n  <ion-icon [name]=\"icon\"></ion-icon> \r\n</ion-button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTestComponentTestComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button (click)=\"calcular()\">\r\n  <ion-icon [name]=\"icon\"></ion-icon>\r\n  Tomar Foto\r\n</ion-button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCrearEmpleoCrearEmpleoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>crear-empleo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Titulo <ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.titulo\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Descripcion<ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-textarea [(ngModel)]=\"empleo.descripcion\"></ion-textarea>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salario<ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.salario\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n\r\n      <test-component icon=\"camera\" (finish)=\"saludar($event)\"></test-component>\r\n\r\n      <app-image-upload [icon]=\"'camera'\" [type]=\"'camera'\" (uploadFinished)=\"imagenCargada($event)\"></app-image-upload>\r\n\r\n      <ion-button type=\"button\" (click)=\"tomarFoto()\">Tomar Foto</ion-button>\r\n      <img [src]=\"base64Image\">\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"guardarEmpleo()\">Crear Empleo</ion-button>\r\n  </div>\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/components/image-upload/image-upload.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/image-upload/image-upload.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImageUploadImageUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/image-upload/image-upload.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/image-upload/image-upload.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ImageUploadComponent */

  /***/
  function srcAppComponentsImageUploadImageUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function () {
      return ImageUploadComponent;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ImageUploadComponent = /*#__PURE__*/function () {
      function ImageUploadComponent(camera, storage, loadingCtrl) {
        _classCallCheck(this, ImageUploadComponent);

        this.camera = camera;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ImageUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "captureAndUpload",
        value: function captureAndUpload() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var options, base64;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("camera");
                    options = {
                      quality: 33,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      sourceType: this.type == 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
                    };
                    console.log("options", options);
                    _context.next = 5;
                    return this.camera.getPicture(options);

                  case 5:
                    base64 = _context.sent;
                    this.startUpload(base64);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "startUpload",
        value: function startUpload(file) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var byteCharacters, path, image, data, ref, task, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    byteCharacters = atob(file);
                    path = "adjuntos/imgs/".concat(new Date().getTime());
                    image = 'data:image/jpg;base64,' + file;
                    console.log(image);
                    data = {
                      ref: path,
                      type: 'image',
                      url: null,
                      name: 'image',
                      size: this.fileSize(Number(byteCharacters.length))
                    };
                    _context2.prev = 5;
                    ref = this.storage.ref(path);
                    task = ref.putString(image, 'data_url');
                    console.log("ref 2");
                    _context2.next = 11;
                    return this.loadingCtrl.create({
                      message: 'Espere, subiendo fotografía...'
                    });

                  case 11:
                    loading = _context2.sent;
                    _context2.next = 14;
                    return loading.present();

                  case 14:
                    //Listener de progreso de carga
                    task.percentageChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (val) {
                      return val === 100;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (complete) {
                      setTimeout(function () {
                        loading.dismiss();
                      }, 3500);
                    })).subscribe();
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                      var downloadURL = ref.getDownloadURL();
                      downloadURL.subscribe(function (url) {
                        data.url = url;
                        console.log("donload terminado", url);

                        _this.uploadFinished.emit(data);
                      });
                    })).subscribe();
                    _context2.next = 21;
                    break;

                  case 18:
                    _context2.prev = 18;
                    _context2.t0 = _context2["catch"](5);
                    console.error("error ", JSON.stringify(_context2.t0));

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 18]]);
          }));
        }
        /**
         * Redondea un número de bytes a un tamaño legible
         * @param sizeInBytes Número de bytes
         */

      }, {
        key: "fileSize",
        value: function fileSize(sizeInBytes) {
          var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
          power = Math.min(power, units.length - 1);
          var size = sizeInBytes / Math.pow(1024, power); // size in new units

          var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals

          var unit = units[power];
          return size ? "".concat(formattedSize, " ").concat(unit) : '0';
        }
      }]);

      return ImageUploadComponent;
    }();

    ImageUploadComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageUploadComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageUploadComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageUploadComponent.prototype, "uploadFinished", void 0);
    ImageUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-upload.component.scss */
      "./src/app/components/image-upload/image-upload.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ImageUploadComponent);
    /***/
  },

  /***/
  "./src/app/components/test-component/test-component.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/test-component/test-component.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTestComponentTestComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/test-component/test-component.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/test-component/test-component.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TestComponentComponent */

  /***/
  function srcAppComponentsTestComponentTestComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function () {
      return TestComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestComponentComponent = /*#__PURE__*/function () {
      function TestComponentComponent() {
        _classCallCheck(this, TestComponentComponent);

        this.finish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contador = 0;
      }

      _createClass(TestComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calcular",
        value: function calcular() {
          this.contador = this.contador + 1;
          this.finish.emit({
            msg: 'OK',
            contador: this.contador
          });
        }
      }]);

      return TestComponentComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], TestComponentComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TestComponentComponent.prototype, "finish", void 0);
    TestComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'test-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-component.component.scss */
      "./src/app/components/test-component/test-component.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TestComponentComponent);
    /***/
  },

  /***/
  "./src/app/crear-empleo/crear-empleo-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/crear-empleo/crear-empleo-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CrearEmpleoPageRoutingModule */

  /***/
  function srcAppCrearEmpleoCrearEmpleoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEmpleoPageRoutingModule", function () {
      return CrearEmpleoPageRoutingModule;
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


    var _crear_empleo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crear-empleo.page */
    "./src/app/crear-empleo/crear-empleo.page.ts");

    var routes = [{
      path: '',
      component: _crear_empleo_page__WEBPACK_IMPORTED_MODULE_3__["CrearEmpleoPage"]
    }];

    var CrearEmpleoPageRoutingModule = function CrearEmpleoPageRoutingModule() {
      _classCallCheck(this, CrearEmpleoPageRoutingModule);
    };

    CrearEmpleoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CrearEmpleoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/crear-empleo/crear-empleo.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/crear-empleo/crear-empleo.module.ts ***!
    \*****************************************************/

  /*! exports provided: CrearEmpleoPageModule */

  /***/
  function srcAppCrearEmpleoCrearEmpleoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEmpleoPageModule", function () {
      return CrearEmpleoPageModule;
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


    var _crear_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crear-empleo-routing.module */
    "./src/app/crear-empleo/crear-empleo-routing.module.ts");
    /* harmony import */


    var _crear_empleo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./crear-empleo.page */
    "./src/app/crear-empleo/crear-empleo.page.ts");
    /* harmony import */


    var _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/test-component/test-component.component */
    "./src/app/components/test-component/test-component.component.ts");
    /* harmony import */


    var _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/image-upload/image-upload.component */
    "./src/app/components/image-upload/image-upload.component.ts");

    var CrearEmpleoPageModule = function CrearEmpleoPageModule() {
      _classCallCheck(this, CrearEmpleoPageModule);
    };

    CrearEmpleoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearEmpleoPageRoutingModule"]],
      declarations: [_crear_empleo_page__WEBPACK_IMPORTED_MODULE_6__["CrearEmpleoPage"], _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"], _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadComponent"]],
      exports: [_components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"], _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadComponent"]]
    })], CrearEmpleoPageModule);
    /***/
  },

  /***/
  "./src/app/crear-empleo/crear-empleo.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/crear-empleo/crear-empleo.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCrearEmpleoCrearEmpleoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFyLWVtcGxlby9jcmVhci1lbXBsZW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/crear-empleo/crear-empleo.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/crear-empleo/crear-empleo.page.ts ***!
    \***************************************************/

  /*! exports provided: CrearEmpleoPage */

  /***/
  function srcAppCrearEmpleoCrearEmpleoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEmpleoPage", function () {
      return CrearEmpleoPage;
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
    /* harmony import */


    var _interfaces_empleo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../interfaces/empleo */
    "./src/app/interfaces/empleo.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");

    var CrearEmpleoPage = /*#__PURE__*/function () {
      function CrearEmpleoPage(empleosService, router, camera) {
        _classCallCheck(this, CrearEmpleoPage);

        this.empleosService = empleosService;
        this.router = router;
        this.camera = camera;
        this.empleo = new _interfaces_empleo__WEBPACK_IMPORTED_MODULE_4__["Empleo"]();
      }

      _createClass(CrearEmpleoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "guardarEmpleo",
        value: function guardarEmpleo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var number;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(this.empleo);
                    _context3.next = 3;
                    return this.empleosService.saveEmpleado2(this.empleo);

                  case 3:
                    number = _context3.sent;
                    console.log("Nuevo empleo guardado", number); //this.empleosService.insertEmpleo(this.empleo)

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "saludar",
        value: function saludar(data) {
          console.log("HOLA", data);
        }
      }, {
        key: "tomarFoto",
        value: function tomarFoto() {
          var _this2 = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this2.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this2.base64Image);
          }, function (err) {
            // Handle error
            console.log(err);
          });
        }
      }, {
        key: "imagenCargada",
        value: function imagenCargada(e) {
          console.log("imagen cargada");
          console.log(JSON.stringify(e));
          this.empleo.image = e;
        }
      }]);

      return CrearEmpleoPage;
    }();

    CrearEmpleoPage.ctorParameters = function () {
      return [{
        type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
      }];
    };

    CrearEmpleoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-empleo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-empleo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-empleo.page.scss */
      "./src/app/crear-empleo/crear-empleo.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])], CrearEmpleoPage);
    /***/
  },

  /***/
  "./src/app/interfaces/empleo.ts":
  /*!**************************************!*\
    !*** ./src/app/interfaces/empleo.ts ***!
    \**************************************/

  /*! exports provided: Empleo */

  /***/
  function srcAppInterfacesEmpleoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Empleo", function () {
      return Empleo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Empleo = function Empleo() {
      _classCallCheck(this, Empleo);
    };
    /***/

  }
}]);
//# sourceMappingURL=crear-empleo-crear-empleo-module-es5.js.map