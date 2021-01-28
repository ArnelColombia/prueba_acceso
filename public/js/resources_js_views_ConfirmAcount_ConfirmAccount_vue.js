(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ConfirmAcount_ConfirmAccount_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_FormConfirm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FormConfirm.vue */ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue");
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
  components: {
    FormConfirm: _components_FormConfirm_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    document.getElementById('title').innerText = "Confirmar Cuenta - Prueba Acceso";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      user: {},
      document_types: [],
      cities: [],
      email: null
    };
  },
  mounted: function mounted() {
    var email = this.$route.query.email;
    this.user.email = email;
  },
  methods: {
    createUser: function createUser() {
      var _this = this;

      if (this.user.password != this.user.confirmPassword) {
        this.$swal({
          icon: "error",
          text: "No coinciden las contraseñas."
        });
      } else {
        var loader = this.$loading.show();
        axios.post("api/users/activeUser", this.user).then(function (res) {
          loader.hide();

          if (res.data.transaction.status == true) {
            _this.$swal({
              icon: "success",
              html: res.data.message.content
            }).then(function (res) {
              if (res.value) {
                window.location = "/login";
              }
            });

            _this.$route;
          } else {
            _this.$swal({
              icon: "error",
              html: res.data.message.content
            }).then(function (res) {
              if (res.value) {
                window.location = "/login";
              }
            });
          }
        })["catch"](function (err) {
          loader.hide();
          console.log(err);

          _this.$swal({
            icon: "error",
            text: "Hubo un problema al momento de crear el usuario."
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ConfirmAcount/ConfirmAccount.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/ConfirmAccount.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmAccount.vue?vue&type=template&id=62acbb0d& */ "./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d&");
/* harmony import */ var _ConfirmAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmAccount.vue?vue&type=script&lang=js& */ "./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ConfirmAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ConfirmAcount/ConfirmAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/components/FormConfirm.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormConfirm.vue?vue&type=template&id=4ef98c63& */ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63&");
/* harmony import */ var _FormConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormConfirm.vue?vue&type=script&lang=js& */ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FormConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ConfirmAcount/components/FormConfirm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormConfirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmAccount_vue_vue_type_template_id_62acbb0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmAccount.vue?vue&type=template&id=62acbb0d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d&");


/***/ }),

/***/ "./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormConfirm_vue_vue_type_template_id_4ef98c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormConfirm.vue?vue&type=template&id=4ef98c63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/ConfirmAccount.vue?vue&type=template&id=62acbb0d& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("b-container", { staticClass: "mt--8 pb-5" }, [_c("form-confirm")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ConfirmAcount/components/FormConfirm.vue?vue&type=template&id=4ef98c63& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { lg: "6", md: "7" } },
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
                  _c("small", [
                    _vm._v(
                      "Activa y crea tu contraseña para poder acceder al sistema."
                    )
                  ])
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
                          { attrs: { md: "12" } },
                          [
                            _c("base-input", {
                              attrs: {
                                label: "Ingresa Tu Contraseña",
                                type: "password"
                              },
                              model: {
                                value: _vm.user.password,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "password", $$v)
                                },
                                expression: "user.password"
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
                            _c("base-input", {
                              attrs: {
                                label: "Confirma Tu Contraseña",
                                type: "password"
                              },
                              model: {
                                value: _vm.user.confirmPassword,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "confirmPassword", $$v)
                                },
                                expression: "user.confirmPassword"
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
                          [_vm._v("Guardar")]
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