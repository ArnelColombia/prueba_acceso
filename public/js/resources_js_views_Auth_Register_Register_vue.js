(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Auth_Register_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_FormRegister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FormRegister */ "./resources/js/views/Auth/Register/components/FormRegister.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LayoutLogin",
  components: {
    FormRegister: _components_FormRegister__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    document.getElementById('title').innerText = "Registro - Prueba Acceso";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      user: {},
      document_types: [],
      cities: []
    };
  },
  mounted: function mounted() {
    this.getDocumentTypes();
    this.getCities();
  },
  methods: {
    getDocumentTypes: function getDocumentTypes() {
      var _this = this;

      var loader = this.$loading.show();
      axios.get("api/users/getDocumentTypes").then(function (res) {
        loader.hide();

        if (res.data.transaction.status == true) {
          _this.document_types = res.data.data;
        }
      })["catch"](function (err) {
        loader.hide();
        console.log(err);

        _this.$swal({
          icon: "error",
          text: "Ocurrio un error al momento de obtener los tipos de documentos."
        });
      });
    },
    getCities: function getCities() {
      var _this2 = this;

      var loader = this.$loading.show();
      axios.get("api/users/getCities").then(function (res) {
        loader.hide();

        if (res.data.transaction.status == true) {
          _this2.cities = res.data.data;
        }
      })["catch"](function (err) {
        loader.hide();
        console.log(err);

        _this2.$swal({
          icon: "error",
          text: "Ocurrio un error al momento de obtener las ciudades."
        });
      });
    },
    createUser: function createUser() {
      var _this3 = this;

      if (!this.user.fullname) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el nombre completo de la persona a registrar."
        });
      } else if (!this.user.email) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el correo electrinico de la persona a registrar."
        });
      } else if (!this.user.document_type) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar el tipo de documento de la persona a registrar."
        });
      } else if (!this.user.document) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el número de documento de la persona a registrar."
        });
      } else if (!this.user.city) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar la ciuadad de la persona a registrar."
        });
      } else {
        var loader = this.$loading.show();
        axios.post("api/users/registerUser", this.user).then(function (res) {
          loader.hide();

          if (res.data.transaction.status == true) {
            _this3.$swal({
              icon: "success",
              html: res.data.message.content
            }).then(function (res) {
              if (res.value) {
                window.location = "/login";
              }
            });

            _this3.$route;
          } else {
            _this3.$swal({
              icon: "error",
              html: res.data.message.content
            });
          }
        })["catch"](function (err) {
          loader.hide();
          console.log(err);

          _this3.$swal({
            icon: "error",
            text: "Hubo un problema al momento de crear el usuario."
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Auth/Register/Register.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Auth/Register/Register.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=90f3a872& */ "./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/Register/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/Register/components/FormRegister.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Auth/Register/components/FormRegister.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRegister.vue?vue&type=template&id=bf39a1a8& */ "./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8&");
/* harmony import */ var _FormRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRegister.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FormRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/Register/components/FormRegister.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_90f3a872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=90f3a872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872&");


/***/ }),

/***/ "./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRegister_vue_vue_type_template_id_bf39a1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormRegister.vue?vue&type=template&id=bf39a1a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/Register.vue?vue&type=template&id=90f3a872& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-content bg-default",
      staticStyle: { height: "100vh !important" }
    },
    [
      _c(
        "div",
        { staticClass: "header bg-gradient-warning py-7 py-lg-8 pt-5" },
        [
          _c("b-container", [
            _c(
              "div",
              { staticClass: "header-body text-center mb-5 pb-5" },
              [
                _c(
                  "b-row",
                  { staticClass: "justify-content-center" },
                  [
                    _c(
                      "b-col",
                      {
                        staticStyle: {
                          "padding-top": "0px",
                          "padding-bottom": "50px"
                        },
                        attrs: { lg: "5", md: "6" }
                      },
                      [
                        _c("h1", { staticClass: "text-white" }, [
                          _vm._v("Bienvenido!")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-lead text-white" }, [
                          _vm._v(
                            "\n                            Registrate con tu correo electronico, si ya tienes una cuenta activa "
                          ),
                          _c(
                            "a",
                            {
                              staticClass: "text-white",
                              attrs: { href: "/login" }
                            },
                            [_vm._v("da click aqui.")]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    viewBox: "0 0 2560 100",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("polygon", {
                    staticClass: "fill-default",
                    attrs: { points: "2560 0 2560 100 0 100" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-container", { staticClass: "mt--8 pb-5" }, [_c("FormRegister")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Register/components/FormRegister.vue?vue&type=template&id=bf39a1a8& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    { staticClass: "justify-content-center" },
    [
      _c(
        "b-col",
        { attrs: { lg: "9", md: "9" } },
        [
          _c(
            "card",
            { staticClass: "bg-secondary shadow border-0" },
            [
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-transparent text-muted text-center mt-2 mb-3"
                  },
                  [_c("h4", [_vm._v("Ingreso!")])]
                )
              ],
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "card-body px-lg-5" }, [
                _c("div", { staticClass: "text-center text-muted mb-4" }, [
                  _c("small", [_vm._v("Registrate con tu correo electronico.")])
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  { attrs: { role: "form" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("base-input", {
                              attrs: { label: "Nombre Completo", type: "text" },
                              model: {
                                value: _vm.user.fullname,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "fullname", $$v)
                                },
                                expression: "user.fullname"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("base-input", {
                              attrs: {
                                label: "Correo Electronico",
                                type: "text"
                              },
                              model: {
                                value: _vm.user.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "email", $$v)
                                },
                                expression: "user.email"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("label", [_vm._v("Tipo De Documento")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "name",
                                options: _vm.document_types
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _c("span", [
                                        _vm._v("Nombre: "),
                                        _c("b", [_vm._v(_vm._s(option.name))])
                                      ]),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Siglas: "),
                                        _c("b", [
                                          _vm._v(_vm._s(option.acronym))
                                        ])
                                      ])
                                    ]
                                  }
                                },
                                {
                                  key: "selected-option",
                                  fn: function(selected_option) {
                                    return [
                                      _c("span", [
                                        _c("b", [
                                          _vm._v(_vm._s(selected_option.name))
                                        ]),
                                        _vm._v(
                                          " -\n                      " +
                                            _vm._s(selected_option.acronym)
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.user.document_type,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "document_type", $$v)
                                },
                                expression: "user.document_type"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("base-input", {
                              attrs: { label: "# Documento", type: "number" },
                              model: {
                                value: _vm.user.document,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "document", $$v)
                                },
                                expression: "user.document"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "12" } },
                          [
                            _c("label", [_vm._v("Ciudad")]),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: { label: "name", options: _vm.cities },
                              scopedSlots: _vm._u([
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _c("span", [
                                        _vm._v("Ciudad: "),
                                        _c("b", [_vm._v(_vm._s(option.name))])
                                      ]),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Siglas: "),
                                        _c("b", [
                                          _vm._v(_vm._s(option.acronym))
                                        ])
                                      ])
                                    ]
                                  }
                                },
                                {
                                  key: "selected-option",
                                  fn: function(selected_option) {
                                    return [
                                      _c("span", [
                                        _c("b", [
                                          _vm._v(_vm._s(selected_option.name))
                                        ]),
                                        _vm._v(
                                          " -\n                      " +
                                            _vm._s(selected_option.acronym)
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.user.city,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "city", $$v)
                                },
                                expression: "user.city"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-center mt-3" },
                      [
                        _c(
                          "base-button",
                          {
                            attrs: { type: "primary", block: false },
                            on: { click: _vm.createUser }
                          },
                          [_vm._v("Crear")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);