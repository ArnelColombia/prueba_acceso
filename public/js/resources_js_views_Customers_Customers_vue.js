(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Customers_Customers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_CreateCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateCustomer */ "./resources/js/views/Customers/components/CreateCustomer.vue");
/* harmony import */ var _components_EditCustomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EditCustomer */ "./resources/js/views/Customers/components/EditCustomer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Customers",
  components: {
    CreateCustomer: _components_CreateCustomer__WEBPACK_IMPORTED_MODULE_0__.default,
    EditCustomer: _components_EditCustomer__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      customers: ["id", "fullname", "document_type", "document", "city", "status", "Opciones"],
      headings: {
        id: "#",
        fullname: "Nombre Completo",
        email: "Correo Electronico",
        document_type: "Tipo De Documento",
        document: "# Documento",
        status: "Estado",
        city: "Ciudad"
      },
      options: {
        perPage: 10
      },
      loader: null,
      data_edit: null,
      cities: [],
      filters: {
        type: null
      }
    };
  },
  mounted: function mounted() {
    document.getElementById("title").innerText = "Usuarios - Prueba Acceso";
    this.getCities();
  },
  methods: {
    getCities: function getCities() {
      var _this = this;

      var loader = this.$loading.show();
      axios.get("api/users/getCities").then(function (res) {
        loader.hide();

        if (res.data.transaction.status == true) {
          _this.cities = res.data.data;
        }
      })["catch"](function (err) {
        loader.hide();
        console.log(err);

        _this.$swal({
          icon: "error",
          text: "Ocurrio un error al momento de obtener las ciudades."
        });
      });
    },
    filterCustomers: function filterCustomers() {
      var bandera = false;

      for (var key in this.filters) {
        if (this.filters[key] != "") {
          bandera = true;
          break;
        }
      }

      bandera ? this.$refs.customers_table.refresh() : console.log("No hay nada para filtrar.");
    },
    refreshData: function refreshData() {
      this.$refs.customers_table.refresh();
    },
    requestFunction: function requestFunction(data) {
      var _this2 = this;

      if (data.query) {
        this.loader = this.$loading.show();
      }

      data = _objectSpread({}, data);

      if (this.filters.type) {
        data = _objectSpread(_objectSpread({}, data), {}, {
          type: this.filters.type.id
        });
      }

      return axios.post("api/customers/getCustomers", data)["catch"](function (err) {
        _this2.loader.hide();

        console.log(err);
      });
    },
    loaded: function loaded(data) {
      if (this.loader != null) {
        this.loader.hide();
      }
    },
    changeStatus: function changeStatus(id, name, status) {
      var _this3 = this;

      var message = "activar";

      if (status == "Activo") {
        message = "inactivar";
      }

      this.$swal({
        icon: "warning",
        html: "\xBFEstas seguro de <b>".concat(message, "</b> el cliente <b>").concat(name, "</b>?"),
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, ".concat(message, "!"),
        cancelButtonText: "Cancelar"
      }).then(function (result) {
        if (result.value) {
          var loader = _this3.$loading.show();

          axios.post("api/customers/changeStatus", {
            id: id
          }).then(function (res) {
            loader.hide();

            if (res.data.transaction.status == true) {
              _this3.refreshData();

              var messageFinal = "activo";

              if (message == "inactivar") {
                messageFinal = "inactivo";
              }

              _this3.$swal({
                icon: "success",
                html: "Se <b>".concat(messageFinal, "</b> el cliente <b>").concat(name, "</b> exitosamente.")
              });
            } else {
              _this3.$swal({
                icon: "error",
                text: res.data.mesage.content
              });
            }
          })["catch"](function (err) {
            loader.hide();
            console.log(err);

            _this3.$swal({
              icon: "error",
              text: "Ocurrio un problema al cambiar el estado del cliente."
            });
          });
        }
      });
    },
    setData: function setData(data) {
      this.data_edit = data;
    },
    deleteCustomer: function deleteCustomer(id, name) {
      var _this4 = this;

      var message = "eliminar";
      this.$swal({
        icon: "warning",
        html: "\xBFEstas seguro de <b>".concat(message, "</b> el cliente <b>").concat(name, "</b>?"),
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, ".concat(message, "!"),
        cancelButtonText: "Cancelar"
      }).then(function (result) {
        if (result.value) {
          var loader = _this4.$loading.show();

          axios.post("api/customers/deleteCustomer", {
            id: id
          }).then(function (res) {
            loader.hide();

            if (res.data.transaction.status == true) {
              _this4.$refs.customers_table.refresh();

              _this4.$swal({
                icon: "success",
                html: "Se <b>elimino</b> el cliente <b>".concat(name, "</b> exitosamente.")
              });
            } else {
              _this4.$swal({
                icon: "error",
                text: res.data.mesage.content
              });
            }
          })["catch"](function (err) {
            loader.hide();
            console.log(err);

            _this4.$swal({
              icon: "error",
              text: "Ocurrio un problema al eliminar el cliente."
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateCustomer",
  data: function data() {
    return {
      customer: {},
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
    createCustomer: function createCustomer() {
      var _this3 = this;

      if (!this.customer.fullname) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el nombre completo del cliente a registrar."
        });
      } else if (!this.customer.document_type) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar el tipo de documento del cliente a registrar."
        });
      } else if (!this.customer.city) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar la ciuadad del cliente a registrar."
        });
      } else {
        var loader = this.$loading.show();
        axios.post("api/customers/createCustomer", this.customer).then(function (res) {
          loader.hide();

          if (res.data.transaction.status == true) {
            _this3.$swal({
              icon: "success",
              html: res.data.message.content
            });

            _this3.$emit("refreshData");

            _this3.$bvModal.hide("createCustomer");
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
            text: "Hubo un problema al momento de crear el cliente."
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditCity",
  props: {
    row: {
      type: Object,
      "default": function _default() {},
      isRequired: true
    }
  },
  data: function data() {
    return {
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
    editCustomer: function editCustomer() {
      var _this3 = this;

      if (!this.row.fullname) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el nombre completo de la persona a registrar."
        });
      } else if (!this.row.document_type) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar el tipo de documento de la persona a registrar."
        });
      } else if (!this.row.document) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el número de documento de la persona a registrar."
        });
      } else if (!this.row.city) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar la ciuadad de la persona a registrar."
        });
      } else {
        var loader = this.$loading.show();
        axios.post("api/customers/editCustomer", this.row).then(function (res) {
          loader.hide();

          if (res.data.transaction.status == true) {
            _this3.$swal({
              icon: "success",
              html: res.data.message.content
            });

            _this3.$emit("refreshData");

            _this3.$bvModal.hide("editCustomer");
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
            text: "Hubo un problema al momento de editar el cliente."
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".VueTables__child-row-toggler--closed::before {\n  content: \"+\";\n  color: #0abb87;\n  font-weight: bold;\n}\n.VueTables__child-row-toggler--open::before {\n  content: \"-\";\n  color: red;\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/Customers/Customers.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Customers/Customers.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=0aa4382c& */ "./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js&");
/* harmony import */ var _Customers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customers.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customers/Customers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customers/components/CreateCustomer.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/Customers/components/CreateCustomer.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=template&id=3179942a& */ "./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a&");
/* harmony import */ var _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=script&lang=js& */ "./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customers/components/CreateCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customers/components/EditCustomer.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/Customers/components/EditCustomer.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCustomer.vue?vue&type=template&id=74427b90& */ "./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90&");
/* harmony import */ var _EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCustomer.vue?vue&type=script&lang=js& */ "./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customers/components/EditCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0aa4382c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=template&id=0aa4382c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c&");


/***/ }),

/***/ "./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_3179942a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=template&id=3179942a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a&");


/***/ }),

/***/ "./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_74427b90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCustomer.vue?vue&type=template&id=74427b90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/Customers.vue?vue&type=template&id=0aa4382c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-4 px-5" },
    [
      _c(
        "card",
        {
          staticStyle: {
            "border-radius": "1.25rem",
            padding: "38px",
            "box-shadow": "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
          }
        },
        [
          _c(
            "b-row",
            { staticClass: "pb-5" },
            [
              _c(
                "b-col",
                { attrs: { md: "3" } },
                [
                  _c("label", [_vm._v("Ciudad:")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: _vm.cities,
                      label: "name",
                      placeholder: "Selecciona La Ciudad"
                    },
                    model: {
                      value: _vm.filters.type,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "type", $$v)
                      },
                      expression: "filters.type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "3" } },
                [
                  _c(
                    "base-button",
                    {
                      staticStyle: { "margin-top": "31px", width: "150px" },
                      attrs: { type: "primary", block: false },
                      on: { click: _vm.filterCustomers }
                    },
                    [_vm._v("\n          Filtrar\n        ")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-button",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal.createCustomer",
                  modifiers: { createCustomer: true }
                }
              ],
              staticClass: "float-right",
              attrs: { type: "primary", block: false }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v("\n      Crear Cliente\n    ")
            ]
          ),
          _vm._v(" "),
          _c("create-customer", { on: { refreshData: _vm.refreshData } }),
          _vm._v(" "),
          _c("v-server-table", {
            ref: "customers_table",
            attrs: {
              url: "api/customers/getCustomers",
              columns: _vm.customers,
              options: {
                headings: _vm.headings,
                requestFunction: _vm.requestFunction,
                options: _vm.options
              }
            },
            on: { loaded: _vm.loaded },
            scopedSlots: _vm._u([
              {
                key: "document_type",
                fn: function(props) {
                  return [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(props.row.document_type.name))]),
                      _vm._v(
                        " -\n          " +
                          _vm._s(props.row.document_type.acronym)
                      )
                    ])
                  ]
                }
              },
              {
                key: "status",
                fn: function(props) {
                  return [
                    props.row.status
                      ? _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "bg",
                                rawName: "v-bg",
                                value: props.row.status.color,
                                expression: "props.row.status.color"
                              }
                            ],
                            staticClass: "status",
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function($event) {
                                return _vm.changeStatus(
                                  props.row.id,
                                  props.row.fullname,
                                  props.row.status.name
                                )
                              }
                            }
                          },
                          [
                            _vm._v(_vm._s(props.row.status.name) + " "),
                            _c("i", { staticClass: "fas fa-edit" })
                          ]
                        )
                      : _vm._e()
                  ]
                }
              },
              {
                key: "city",
                fn: function(props) {
                  return [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(props.row.city.name))]),
                      _vm._v(" -\n          " + _vm._s(props.row.city.acronym))
                    ])
                  ]
                }
              },
              {
                key: "Opciones",
                fn: function(props) {
                  return [
                    _c(
                      "base-button",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.editCustomer",
                            modifiers: { editCustomer: true }
                          }
                        ],
                        attrs: { type: "success", block: false },
                        on: {
                          click: function($event) {
                            return _vm.setData(props.row)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-edit" }),
                        _vm._v(" Editar\n        ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        attrs: { type: "danger", block: false },
                        on: {
                          click: function($event) {
                            return _vm.deleteCustomer(
                              props.row.id,
                              props.row.fullname
                            )
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "far fa-trash-alt" }),
                        _vm._v(" Eliminar\n        ")
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("edit-customer", { attrs: { row: _vm.data_edit } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/CreateCustomer.vue?vue&type=template&id=3179942a& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        id: "createCustomer",
        size: "lg",
        static: true,
        lazy: true,
        title: "Crear Cliente",
        "hide-footer": "",
        "no-close-on-backdrop": ""
      }
    },
    [
      _c("b-container", [
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
                      attrs: { label: "Nombre Completo", type: "text" },
                      model: {
                        value: _vm.customer.fullname,
                        callback: function($$v) {
                          _vm.$set(_vm.customer, "fullname", $$v)
                        },
                        expression: "customer.fullname"
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
                      attrs: { label: "name", options: _vm.document_types },
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
                                _c("b", [_vm._v(_vm._s(option.acronym))])
                              ])
                            ]
                          }
                        },
                        {
                          key: "selected-option",
                          fn: function(selected_option) {
                            return [
                              _c("span", [
                                _c("b", [_vm._v(_vm._s(selected_option.name))]),
                                _vm._v(
                                  " -\n                " +
                                    _vm._s(selected_option.acronym)
                                )
                              ])
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.customer.document_type,
                        callback: function($$v) {
                          _vm.$set(_vm.customer, "document_type", $$v)
                        },
                        expression: "customer.document_type"
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
                        value: _vm.customer.document,
                        callback: function($$v) {
                          _vm.$set(_vm.customer, "document", $$v)
                        },
                        expression: "customer.document"
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
                                _c("b", [_vm._v(_vm._s(option.acronym))])
                              ])
                            ]
                          }
                        },
                        {
                          key: "selected-option",
                          fn: function(selected_option) {
                            return [
                              _c("span", [
                                _c("b", [_vm._v(_vm._s(selected_option.name))]),
                                _vm._v(
                                  " -\n                " +
                                    _vm._s(selected_option.acronym)
                                )
                              ])
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.customer.city,
                        callback: function($$v) {
                          _vm.$set(_vm.customer, "city", $$v)
                        },
                        expression: "customer.city"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "float-right" },
              [
                _c(
                  "base-button",
                  {
                    attrs: { type: "secondary", block: false },
                    on: {
                      click: function($event) {
                        return _vm.$bvModal.hide("createUser")
                      }
                    }
                  },
                  [_vm._v("Cancelar")]
                ),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    attrs: { type: "primary", block: false },
                    on: { click: _vm.createCustomer }
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
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customers/components/EditCustomer.vue?vue&type=template&id=74427b90& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        id: "editCustomer",
        size: "lg",
        title: "Editar Usuario " + _vm.row.fullname,
        "hide-footer": ""
      }
    },
    [
      _c("b-container", [
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
                      attrs: { label: "Nombre Completo", type: "text" },
                      model: {
                        value: _vm.row.fullname,
                        callback: function($$v) {
                          _vm.$set(_vm.row, "fullname", $$v)
                        },
                        expression: "row.fullname"
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
                                _c("b", [_vm._v(_vm._s(option.acronym))])
                              ])
                            ]
                          }
                        },
                        {
                          key: "selected-option",
                          fn: function(selected_option) {
                            return [
                              _c("span", [
                                _c("b", [_vm._v(_vm._s(selected_option.name))]),
                                _vm._v(
                                  " -\n                " +
                                    _vm._s(selected_option.acronym)
                                )
                              ])
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.row.city,
                        callback: function($$v) {
                          _vm.$set(_vm.row, "city", $$v)
                        },
                        expression: "row.city"
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
                      attrs: { label: "name", options: _vm.document_types },
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
                                _c("b", [_vm._v(_vm._s(option.acronym))])
                              ])
                            ]
                          }
                        },
                        {
                          key: "selected-option",
                          fn: function(selected_option) {
                            return [
                              _c("span", [
                                _c("b", [_vm._v(_vm._s(selected_option.name))]),
                                _vm._v(
                                  " -\n                " +
                                    _vm._s(selected_option.acronym)
                                )
                              ])
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.row.document_type,
                        callback: function($$v) {
                          _vm.$set(_vm.row, "document_type", $$v)
                        },
                        expression: "row.document_type"
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
                        value: _vm.row.document,
                        callback: function($$v) {
                          _vm.$set(_vm.row, "document", $$v)
                        },
                        expression: "row.document"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "float-right" },
              [
                _c(
                  "base-button",
                  {
                    attrs: { type: "primary", block: false },
                    on: { click: _vm.editCustomer }
                  },
                  [_vm._v("Editar")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);