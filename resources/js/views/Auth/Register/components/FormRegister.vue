<template>
  <b-row class="justify-content-center">
    <b-col lg="9" md="9">
      <card class="bg-secondary shadow border-0">
        <template name="header">
          <div class="bg-transparent text-muted text-center mt-2 mb-3">
            <h4>Ingreso!</h4>
          </div>
        </template>
        <hr />
        <div class="card-body px-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Registrate con tu correo electronico.</small>
          </div>
            <form role="form">
              <b-row>
                <b-col md="6">
                  <base-input
                    label="Nombre Completo"
                    v-model="user.fullname"
                    type="text"
                  ></base-input>
                </b-col>
                <b-col md="6">
                  <base-input
                    label="Correo Electronico"
                    v-model="user.email"
                    type="text"
                  ></base-input>
                </b-col>
                <b-col md="6">
                  <label>Tipo De Documento</label>
                  <v-select
                    v-model="user.document_type"
                    label="name"
                    :options="document_types"
                  >
                    <template v-slot:option="option">
                      <span
                        >Nombre: <b>{{ option.name }}</b></span
                      ><br />
                      <span
                        >Siglas: <b>{{ option.acronym }}</b></span
                      >
                    </template>
                    <template v-slot:selected-option="selected_option">
                      <span
                        ><b>{{ selected_option.name }}</b> -
                        {{ selected_option.acronym }}</span
                      >
                    </template>
                  </v-select>
                </b-col>
                <b-col md="6">
                  <base-input
                    label="# Documento"
                    v-model="user.document"
                    type="number"
                  ></base-input>
                </b-col>
                <b-col md="12">
                  <label>Ciudad</label>
                  <v-select v-model="user.city" label="name" :options="cities">
                    <template v-slot:option="option">
                      <span
                        >Ciudad: <b>{{ option.name }}</b></span
                      ><br />
                      <span
                        >Siglas: <b>{{ option.acronym }}</b></span
                      >
                    </template>
                    <template v-slot:selected-option="selected_option">
                      <span
                        ><b>{{ selected_option.name }}</b> -
                        {{ selected_option.acronym }}</span
                      >
                    </template>
                  </v-select>
                </b-col>
              </b-row>
              <div class="d-flex justify-content-center mt-3">
                <base-button type="primary" :block="false" @click="createUser"
                  >Crear</base-button
                >
              </div>
            </form>
        </div>
      </card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Register",
  data: () => ({
    user: {},
    document_types: [],
    cities: [],
  }),
  mounted() {
    this.getDocumentTypes();
    this.getCities();
  },
  methods: {
    getDocumentTypes() {
      let loader = this.$loading.show();
      axios
        .get("api/users/getDocumentTypes")
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.document_types = res.data.data;
          }
        })
        .catch((err) => {
          loader.hide();
          console.log(err);
          this.$swal({
            icon: "error",
            text:
              "Ocurrio un error al momento de obtener los tipos de documentos.",
          });
        });
    },

    getCities() {
      let loader = this.$loading.show();
      axios
        .get("api/users/getCities")
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.cities = res.data.data;
          }
        })
        .catch((err) => {
          loader.hide();
          console.log(err);
          this.$swal({
            icon: "error",
            text: "Ocurrio un error al momento de obtener las ciudades.",
          });
        });
    },

    createUser() {
      if (!this.user.fullname) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el nombre completo de la persona a registrar.",
        });
      } else if (!this.user.email) {
        this.$swal({
          icon: "error",
          text:
            "Debes ingresar el correo electrinico de la persona a registrar.",
        });
      } else if (!this.user.document_type) {
        this.$swal({
          icon: "error",
          text:
            "Debes seleccionar el tipo de documento de la persona a registrar.",
        });
      } else if (!this.user.document) {
        this.$swal({
          icon: "error",
          text:
            "Debes ingresar el número de documento de la persona a registrar.",
        });
      } else if (!this.user.city) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar la ciuadad de la persona a registrar.",
        });
      } else {
        let loader = this.$loading.show();
        axios
          .post("api/users/registerUser", this.user)
          .then((res) => {
            loader.hide();
            if (res.data.transaction.status == true) {
              this.$swal({
                icon: "success",
                html: res.data.message.content,
              }).then((res) => {
                if(res.value){
                  window.location = "/login"
                }
              });
              this.$route
            } else {
              this.$swal({
                icon: "error",
                html: res.data.message.content,
              });
            }
          })
          .catch((err) => {
            loader.hide();
            console.log(err);
            this.$swal({
              icon: "error",
              text: "Hubo un problema al momento de crear el usuario.",
            });
          });
      }
    },
  },
};
</script>