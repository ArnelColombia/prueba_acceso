<template>
  <b-modal
    id="editUser"
    size="lg"
    :title="`Editar Usuario ${row.fullname}`"
    hide-footer
  >
    <b-container>
      <form role="form">
        <b-row>
          <b-col md="6">
            <base-input
              label="Nombre Completo"
              v-model="row.fullname"
              type="text"
            ></base-input>
          </b-col>
          <b-col md="6">
            <label>Role</label>
            <v-select v-model="row.roles" multiple label="name" :options="roles">

            </v-select>
          </b-col>
          <b-col md="6">
            <base-input
              label="Correo Electronico"
              v-model="row.email"
              type="email"
            ></base-input>
          </b-col>
          <b-col md="6">
            <label>Ciudad</label>
            <v-select v-model="row.city" label="name" :options="cities">
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
          <b-col md="6">
            <label>Tipo De Documento</label>
            <v-select
              v-model="row.document_type"
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
              v-model="row.document"
              type="number"
            ></base-input>
          </b-col>
        </b-row>
        <hr />
        <div class="float-right">
          <base-button type="primary" :block="false" @click="editUser"
            >Editar</base-button
          >
        </div>
      </form>
    </b-container>
  </b-modal>
</template>
<script>
export default {
  name: "EditCity",
  props: {
    row: {
      type: Object,
      default: () => {},
      isRequired: true,
    },
  },
  data: () => ({
    document_types: [],
    cities: [],
    roles: []
  }),
  mounted() {
    this.getDocumentTypes();
    this.getCities();
    this.getRoles();
  },
  methods: {
    changeCity() {
      let loader = this.$loading.show();
      axios
        .post("api/cities/editCity", this.row)
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.$swal({
              icon: "success",
              html: `Se edito exitosamente la ciudad de <b>${res.data.data.name}</b>`,
            });
            this.$emit("refreshData");
            this.ver = false;
          } else {
            this.$swal({
              icon: "success",
              text: res.data.message.content,
            });
          }
        })
        .catch((err) => {
          loader.hide();
          console.log(err);
          this.$swal({
            icon: "error",
            text: "No se puedo editar la informacion de la ciudad",
          });
        });
    },

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

    getRoles() {
      let loader = this.$loading.show();
      axios
        .get("api/users/getRoles")
        .then((res) => {
          loader.hide();
          if (res.data.transaction.status == true) {
            this.roles = res.data.data;
          }
        })
        .catch((err) => {
          loader.hide();
          console.log(err);
          this.$swal({
            icon: "error",
            text:
              "Ocurrio un error al momento de obtener los roles.",
          });
        });
    },

    editUser() {
      if (!this.row.fullname) {
        this.$swal({
          icon: "error",
          text: "Debes ingresar el nombre completo de la persona a registrar.",
        });
      } else if (!this.row.email) {
        this.$swal({
          icon: "error",
          text:
            "Debes ingresar el correo electrinico de la persona a registrar.",
        });
      } else if (!this.row.document_type) {
        this.$swal({
          icon: "error",
          text:
            "Debes seleccionar el tipo de documento de la persona a registrar.",
        });
      } else if (!this.row.document) {
        this.$swal({
          icon: "error",
          text:
            "Debes ingresar el número de documento de la persona a registrar.",
        });
      } else if (!this.row.city) {
        this.$swal({
          icon: "error",
          text: "Debes seleccionar la ciuadad de la persona a registrar.",
        });
      } else {
        let loader = this.$loading.show();
        axios
          .post("api/users/editUser", this.row)
          .then((res) => {
            loader.hide();
            if (res.data.transaction.status == true) {
              this.$swal({
                icon: "success",
                html: res.data.message.content,
              });
              this.$emit("refreshData");
              this.$bvModal.hide("editUser");
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