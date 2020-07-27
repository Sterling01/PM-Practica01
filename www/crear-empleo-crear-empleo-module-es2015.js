(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-empleo-crear-empleo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button size=\"small\" (click)=\"captureAndUpload()\">\r\n  <ion-icon [name]=\"icon\"></ion-icon> \r\n</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button (click)=\"calcular()\">\r\n  <ion-icon [name]=\"icon\"></ion-icon>\r\n  Tomar Foto\r\n</ion-button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>crear-empleo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Titulo <ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.titulo\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Descripcion<ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-textarea [(ngModel)]=\"empleo.descripcion\"></ion-textarea>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salario<ion-text color=\"danger\">*</ion-text></ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"empleo.salario\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n\r\n      <test-component icon=\"camera\" (finish)=\"saludar($event)\"></test-component>\r\n\r\n      <app-image-upload [icon]=\"'camera'\" [type]=\"'camera'\" (uploadFinished)=\"imagenCargada($event)\"></app-image-upload>\r\n\r\n      <ion-button type=\"button\" (click)=\"tomarFoto()\">Tomar Foto</ion-button>\r\n      <img [src]=\"base64Image\">\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"guardarEmpleo()\">Crear Empleo</ion-button>\r\n  </div>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ImageUploadComponent = class ImageUploadComponent {
    constructor(camera, storage, loadingCtrl) {
        this.camera = camera;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    captureAndUpload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("camera");
            const options = {
                quality: 33,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.type == 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            console.log("options", options);
            const base64 = yield this.camera.getPicture(options);
            this.startUpload(base64);
        });
    }
    startUpload(file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let byteCharacters = atob(file);
            const path = `adjuntos/imgs/${new Date().getTime()}`;
            let image = 'data:image/jpg;base64,' + file;
            console.log(image);
            const data = {
                ref: path,
                type: 'image',
                url: null,
                name: 'image',
                size: this.fileSize(Number(byteCharacters.length))
            };
            try {
                let ref = this.storage.ref(path);
                let task = ref.putString(image, 'data_url');
                console.log("ref 2");
                const loading = yield this.loadingCtrl.create({
                    message: 'Espere, subiendo fotografía...'
                });
                yield loading.present();
                //Listener de progreso de carga
                task.percentageChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(val => val === 100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(complete => {
                    setTimeout(() => {
                        loading.dismiss();
                    }, 3500);
                })).subscribe();
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                    let downloadURL = ref.getDownloadURL();
                    downloadURL.subscribe(url => {
                        data.url = url;
                        console.log("donload terminado", url);
                        this.uploadFinished.emit(data);
                    });
                }))
                    .subscribe();
            }
            catch (error) {
                console.error("error ", JSON.stringify(error));
            }
        });
    }
    /**
     * Redondea un número de bytes a un tamaño legible
     * @param sizeInBytes Número de bytes
     */
    fileSize(sizeInBytes) {
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return size ? `${formattedSize} ${unit}` : '0';
    }
};
ImageUploadComponent.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImageUploadComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImageUploadComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageUploadComponent.prototype, "uploadFinished", void 0);
ImageUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-upload.component.scss */ "./src/app/components/image-upload/image-upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ImageUploadComponent);



/***/ }),

/***/ "./src/app/components/test-component/test-component.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/test-component/test-component.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponentComponent = class TestComponentComponent {
    constructor() {
        this.finish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contador = 0;
    }
    ngOnInit() { }
    calcular() {
        this.contador = this.contador + 1;
        this.finish.emit({ msg: 'OK', contador: this.contador });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TestComponentComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TestComponentComponent.prototype, "finish", void 0);
TestComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-component/test-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-component.component.scss */ "./src/app/components/test-component/test-component.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestComponentComponent);



/***/ }),

/***/ "./src/app/crear-empleo/crear-empleo-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/crear-empleo/crear-empleo-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CrearEmpleoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEmpleoPageRoutingModule", function() { return CrearEmpleoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _crear_empleo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-empleo.page */ "./src/app/crear-empleo/crear-empleo.page.ts");




const routes = [
    {
        path: '',
        component: _crear_empleo_page__WEBPACK_IMPORTED_MODULE_3__["CrearEmpleoPage"]
    }
];
let CrearEmpleoPageRoutingModule = class CrearEmpleoPageRoutingModule {
};
CrearEmpleoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearEmpleoPageRoutingModule);



/***/ }),

/***/ "./src/app/crear-empleo/crear-empleo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/crear-empleo/crear-empleo.module.ts ***!
  \*****************************************************/
/*! exports provided: CrearEmpleoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEmpleoPageModule", function() { return CrearEmpleoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-empleo-routing.module */ "./src/app/crear-empleo/crear-empleo-routing.module.ts");
/* harmony import */ var _crear_empleo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-empleo.page */ "./src/app/crear-empleo/crear-empleo.page.ts");
/* harmony import */ var _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/test-component/test-component.component */ "./src/app/components/test-component/test-component.component.ts");
/* harmony import */ var _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/image-upload/image-upload.component */ "./src/app/components/image-upload/image-upload.component.ts");









let CrearEmpleoPageModule = class CrearEmpleoPageModule {
};
CrearEmpleoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_empleo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearEmpleoPageRoutingModule"]
        ],
        declarations: [_crear_empleo_page__WEBPACK_IMPORTED_MODULE_6__["CrearEmpleoPage"], _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"], _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadComponent"]],
        exports: [_components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"], _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadComponent"]]
    })
], CrearEmpleoPageModule);



/***/ }),

/***/ "./src/app/crear-empleo/crear-empleo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/crear-empleo/crear-empleo.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFyLWVtcGxlby9jcmVhci1lbXBsZW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/crear-empleo/crear-empleo.page.ts":
/*!***************************************************!*\
  !*** ./src/app/crear-empleo/crear-empleo.page.ts ***!
  \***************************************************/
/*! exports provided: CrearEmpleoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEmpleoPage", function() { return CrearEmpleoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/empleos.service */ "./src/app/shared/services/empleos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interfaces_empleo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/empleo */ "./src/app/interfaces/empleo.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






let CrearEmpleoPage = class CrearEmpleoPage {
    constructor(empleosService, router, camera) {
        this.empleosService = empleosService;
        this.router = router;
        this.camera = camera;
        this.empleo = new _interfaces_empleo__WEBPACK_IMPORTED_MODULE_4__["Empleo"]();
    }
    ngOnInit() {
    }
    guardarEmpleo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.empleo);
            let number = yield this.empleosService.saveEmpleado2(this.empleo);
            console.log("Nuevo empleo guardado", number);
            //this.empleosService.insertEmpleo(this.empleo)
        });
    }
    saludar(data) {
        console.log("HOLA", data);
    }
    tomarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(this.base64Image);
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
    imagenCargada(e) {
        console.log("imagen cargada");
        console.log(JSON.stringify(e));
        this.empleo.image = e;
    }
};
CrearEmpleoPage.ctorParameters = () => [
    { type: _shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
CrearEmpleoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-empleo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-empleo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-empleo/crear-empleo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-empleo.page.scss */ "./src/app/crear-empleo/crear-empleo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_empleos_service__WEBPACK_IMPORTED_MODULE_2__["EmpleosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
], CrearEmpleoPage);



/***/ }),

/***/ "./src/app/interfaces/empleo.ts":
/*!**************************************!*\
  !*** ./src/app/interfaces/empleo.ts ***!
  \**************************************/
/*! exports provided: Empleo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empleo", function() { return Empleo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Empleo {
}


/***/ })

}]);
//# sourceMappingURL=crear-empleo-crear-empleo-module-es2015.js.map