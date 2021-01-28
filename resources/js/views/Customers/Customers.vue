<template>
  <div class="mt-4 px-5">
    <card
      style="
        border-radius: 1.25rem;
        padding: 38px;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
      "
    >
      <b-row class="pb-5">
        <b-col md="3">
          <label>Ciudad:</label>
          <v-select
            v-model="filters.type"
            :options="cities"
            label="name"
            placeholder="Selecciona La Ciudad"
          ></v-select>
        </b-col>
        <b-col md="3">
          <base-button
            type="primary"
            :block="false"
            @click="filterCustomers"
            style="margin-top: 31px; width: 150px;"
          >
            Filtrar
          </base-button>
        </b-col>
      </b-row>

      <base-button
        type="primary"
        class="float-right"
        :block="false"
        v-b-modal.createCustomer
      >
        <i class="fa fa-plus"></i>
        Crear Cliente
      </base-button>
      <create-customer @refreshData="refreshData"></create-customer>
      <v-server-table
        ref="customers_table"
        url="api/customers/getCustomers"
        :columns="customers"
        @loaded="loaded"
        :options="{ headings, requestFunction, options }"
      >
        <template slot="document_type" slot-scope="props">
          <span
            ><b>{{ props.row.document_type.name }}</b> -
            {{ props.row.document_type.acronym }}</span
          >
        </template>
        <template slot="status" slot-scope="props">
          <span
            v-if="props.row.status"
            v-bg="props.row.status.color"
            class="status"
            style="cursor: pointer"
            @click="
              changeStatus(
                props.row.id,
                props.row.fullname,
                props.row.status.name
              )
            "
            >{{ props.row.status.name }} <i class="fas fa-edit"></i
          ></span>
        </template>
        <template slot="city" slot-scope="props">
          <span
            ><b>{{ props.row.city.name }}</b> -
            {{ props.row.city.acronym }}</span
          >
        </template>
        <template slot="Opciones" slot-scope="props">
          <base-button
            type="success"
            @click="setData(props.row)"
            :block="false"
            v-b-modal.editCustomer
          >
            <i class="fas fa-edit"></i> Editar
          </base-button>
          <base-button
            type="danger"
            :block="false"
            @click="deleteCustomer(props.row.id, props.row.fullname)"
          >
            <i class="far fa-trash-alt"></i> Eliminar
          </base-button>
        </template>
      </v-server-table>
      <edit-customer :row="data_edit"></edit-customer>
    </card>
  </div>
</template>
<script>
import CreateCustomer from "./components/CreateCustomer";
import EditCustomer from "./components/EditCustomer";
export default {
  name: "Customers",
  components: { CreateCustomer, EditCustomer },
  data: () => ({
    customers: [
      "id",
      "fullname",
      "document_type",
      "document",
      "city",
      "status",
      "Opciones",
    ],
    headings: {
      id: "#",
      fullname: "Nombre Completo",
      email: "Correo Electronico",
      document_type: "Tipo De Documento",
      document: "# Documento",
      status: "Estado",
      city: "Ciudad",
    },
    options: {
      perPage: 10,
    },
    loader: null,
    data_edit: null,
    cities: [],
    filters: {
      type: null
    },
  }),
  mounted() {
    document.getElementById("title").innerText = "Usuarios - Prueba Acceso";
    this.getCities();
  },
  methods: {
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

    filterCustomers() {
      let bandera = false;
      for (const key in this.filters) {
        if (this.filters[key] != "") {
          bandera = true;
          break;
        }
      }
      bandera
        ? this.$refs.customers_table.refresh()
        : console.log("No hay nada para filtrar.");
    },

    refreshData() {
      this.$refs.customers_table.refresh();
    },

    requestFunction(data) {
      if (data.query) {
        this.loader = this.$loading.show();
      }

      data = { ...data };
      if (this.filters.type) {
        data = { ...data, type: this.filters.type.id };
      }

      return axios.post("api/customers/getCustomers", data).catch((err) => {
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
        html: `¿Estas seguro de <b>${message}</b> el cliente <b>${name}</b>?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Si, ${message}!`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          let loader = this.$loading.show();
          axios
            .post("api/customers/changeStatus", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.refreshData();
                let messageFinal = "activo";
                if (message == "inactivar") {
                  messageFinal = "inactivo";
                }

                this.$swal({
                  icon: "success",
                  html: `Se <b>${messageFinal}</b> el cliente <b>${name}</b> exitosamente.`,
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
                text: "Ocurrio un problema al cambiar el estado del cliente.",
              });
            });
        }
      });
    },

    setData(data) {
      this.data_edit = data;
    },

    deleteCustomer(id, name) {
      let message = "eliminar";

      this.$swal({
        icon: "warning",
        html: `¿Estas seguro de <b>${message}</b> el cliente <b>${name}</b>?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Si, ${message}!`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          let loader = this.$loading.show();
          axios
            .post("api/customers/deleteCustomer", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.$refs.customers_table.refresh();

                this.$swal({
                  icon: "success",
                  html: `Se <b>elimino</b> el cliente <b>${name}</b> exitosamente.`,
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
                text: "Ocurrio un problema al eliminar el cliente.",
              });
            });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.VueTables__child-row-toggler--closed::before {
  content: "+";
  color: #0abb87;
  font-weight: bold;
}

.VueTables__child-row-toggler--open::before {
  content: "-";
  color: red;
  font-weight: bold;
}
</style>