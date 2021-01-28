<template>
  <div class="mt-4 px-5">
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
        v-b-modal.createUser
      >
        <i class="fa fa-plus"></i>
        Crear Usuario
      </base-button>
      <create-user @refreshData="refreshData"></create-user>
      <v-server-table
        ref="users_table"
        url="api/users/getUsers"
        :columns="users"
        @loaded="loaded"
        :options="{ headings, requestFunction, options }"
      >
        <template slot="document_type" slot-scope="props">
          <span><b>{{ props.row.document_type.name }}</b> - {{ props.row.document_type.acronym }}</span>
        </template>
        <template slot="child_row" slot-scope="props">
          <child-row :row="props.row" @refreshData="refreshData"></child-row>
        </template>
        <template slot="Opciones" slot-scope="props">
          <base-button type="success" @click="setData(props.row)" :block="false" v-b-modal.editUser>
            <i class="fas fa-edit"></i> Editar
          </base-button>
          <base-button type="danger" :block="false" @click="deleteUser(props.row.id, props.row.email)">
            <i class="far fa-trash-alt"></i> Eliminar
          </base-button>
        </template>
      </v-server-table>
      <edit-user :row="data_edit"></edit-user>
    </card>
  </div>
</template>
<script>
import CreateUser from "./components/CreateUser.vue";
import ChildRow from './components/ChildRow.vue';
import EditUser from './components/EditUser.vue';
export default {
  name: "Users",
  components: { CreateUser, ChildRow, EditUser },
  data: () => ({
    users: ["id", "fullname", "email", "document_type", "document" ,"Opciones"],
    headings: {
      id: '#',
      fullname: "Nombre Completo",
      email: "Correo Electronico",
      document_type: "Tipo De Documento",
      document: "# Documento"
    },
    options: {
      perPage: 10,
    },
    loader: null,
    data_edit: null,
  }),
  mounted() {
    document.getElementById("title").innerText = "Usuarios - Prueba Acceso";
  },
  methods: {
    refreshData() {
      this.$refs.users_table.refresh();
    },

    requestFunction(data) {
      if (data.query) {
        this.loader = this.$loading.show();
      }

      return axios.post("api/users/getUsers", data).catch((err) => {
        this.loader.hide();
        console.log(err);
      });
    },

    loaded(data) {
      if (this.loader != null) {
        this.loader.hide();
      }
    },

    setData(data){
      this.data_edit = data;
    },

    deleteUser(id, email) {
      let message = "eliminar";

      this.$swal({
        icon: "warning",
        html: `¿Estas seguro de <b>${message}</b> el usuario con correo electronico <b>${email}</b>?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Si, ${message}!`,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          let loader = this.$loading.show();
          axios
            .post("api/users/deleteUser", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.$refs.users_table.refresh();

                this.$swal({
                  icon: "success",
                  html: `Se <b>elimino</b> el usuario con correo electronico <b>${email}</b> exitosamente.`,
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
                  "Ocurrio un problema al eliminar el usuario.",
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
    color:#0abb87;
    font-weight: bold;
}

.VueTables__child-row-toggler--open::before {
    content: "-";
    color:red;
    font-weight: bold;

}
</style>