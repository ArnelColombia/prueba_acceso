<template>
  <div class="mt-5 p-5">
    <card
      style="
        border-radius: 1.25rem;
        padding: 38px;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
      "
    >
      <base-button
        type="primary"
        class="float-right"
        :block="false"
        v-b-modal.createCity
      >
        <i class="fa fa-plus"></i>
        Crear Ciudad
      </base-button>
      <create-city @refreshData="refreshData"></create-city>
      <v-server-table
        ref="cities_table"
        url="api/cities/getCities"
        :columns="cities"
        @loaded="loaded"
        :options="{ headings, requestFunction, options }"
      >
        <template slot="name" slot-scope="props">
          <span><b>{{ props.row.name }}</b></span>
        </template>
        <template slot="status" slot-scope="props">
          <span
            v-if="props.row.status"
            v-bg="props.row.status.color"
            class="status"
            style="cursor: pointer"
            @click="
              changeStatus(props.row.id, props.row.name, props.row.status.name)
            "
            >{{ props.row.status.name }} <i class="fas fa-edit"></i
          ></span>
        </template>
        <template slot="Opciones" slot-scope="props">
          <base-button type="success" @click="setData(props.row)" :block="false" v-b-modal.editCity>
            <i class="fas fa-edit"></i> Editar
          </base-button>
          <base-button type="danger" :block="false" @click="deleteCity(props.row.id, props.row.name)"
            ><i class="far fa-trash-alt"></i> Eliminar</base-button
          >
        </template>
      </v-server-table>
      <edit-city :row="data_edit != null ? data_edit : { name: '', acronym: '' }" @refreshData="refreshData"></edit-city>
    </card>
  </div>
</template>
<script>
import EditCity from "./components/EditCity";
import CreateCity from "./components/createCity";
export default {
  name: "Cities",
  components: { EditCity, CreateCity },
  data: () => ({
    cities: ["id", "name", "acronym", "status", "Opciones"],
    headings: {
      id: "#",
      name: "Ciudad",
      acronym: "Siglas",
      status: "Estado",
    },
    options: {
      perPage: 10,
    },
    loader: null,
    modalShow: false,
    data_edit: null,
    visibleCreate: false,
    visibleEdit: false,
  }),
  mounted() {
    document.getElementById("title").innerText = "Ciudades - Prueba Acceso";
  },
  methods: {
    requestFunction(data) {
      if (data.query) {
        this.loader = this.$loading.show();
      }

      return axios.post("api/cities/getCities", data).catch((err) => {
        this.loader.hide();
        console.log(err);
      });
    },

    loaded(data) {
      if (this.loader != null) {
        this.loader.hide();
      }
    },

    changeStatus(id, name, status) {
      let message = "activar";
      if (status == "Activo") {
        message = "inactivar";
      }

      this.$swal({
        icon: "warning",
        html: `¿Estas seguro de <b>${message}</b> la ciudad de <b>${name}</b>?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Si, ${message}!`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          let loader = this.$loading.show();
          axios
            .post("api/cities/changeStatus", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.$refs.cities_table.refresh();
                let messageFinal = "activo";
                if (message == "inactivar") {
                  messageFinal = "inactivo";
                }

                this.$swal({
                  icon: "success",
                  html: `Se <b>${messageFinal}</b> la ciudad <b>${name}</b> exitosamente.`,
                });
              } else {
                this.$swal({
                  icon: "error",
                  text: res.data.mesage.content,
                });
              }
            })
            .catch((err) => {
              loader.hide();
              console.log(err);
              this.$swal({
                icon: "error",
                text:
                  "Ocurrio un problema al cambiar el estado de esta ciudad.",
              });
            });
        }
      });
    },

    setData(data) {
      this.data_edit = data;
    },

    refreshData() {
      this.$refs.cities_table.refresh();
    },

    deleteCity(id, name) {
      let message = "eliminar";

      this.$swal({
        icon: "warning",
        html: `¿Estas seguro de <b>${message}</b> la ciudad de <b>${name}</b>?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Si, ${message}!`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          let loader = this.$loading.show();
          axios
            .post("api/cities/deleteCity", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.$refs.cities_table.refresh();

                this.$swal({
                  icon: "success",
                  html: `Se <b>${message}</b> la ciudad <b>${name}</b> exitosamente.`,
                });
              } else {
                this.$swal({
                  icon: "error",
                  text: res.data.mesage.content,
                });
              }
            })
            .catch((err) => {
              loader.hide();
              console.log(err);
              this.$swal({
                icon: "error",
                text:
                  "Ocurrio un problema al cambiar el estado de esta ciudad.",
              });
            });
        }
      });
    },

    openModal(id, data = null) {
      this.data_edit = data;
      $(id).modal("show");
      console.log($(id).modal("show"));
    },
  },
};
</script>