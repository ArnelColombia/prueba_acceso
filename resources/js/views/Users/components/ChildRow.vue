<template>
  <table class="w-100" style="border: 2px solid #00bf9a; border-radius: 20px !important;">
    <thead>
        <th>Ciudad</th>
        <th>Estado</th>
        <th>Roles</th>
        <th>Permisos</th>
    </thead>
    <tbody>
      <tr>
        <td>{{ row.city.name }}</td>
        <td><span
            v-if="row.status"
            v-bg="row.status.color"
            class="status"
            style="cursor: pointer"
            @click="
              changeStatus(row.id, row.email, row.status.name)
            "
            >{{ row.status.name }} <i class="fas fa-edit"></i
          ></span>
        </td>
        <td>
          <span v-for="(item, index) in row.roles" :key="index" v-bg="'#000'"
            class="status" style="margin-left: 5px;">{{ item.name }}</span>
        </td>
        <td>
          <span v-for="(item, index) in row.permissions" :key="index">{{ item.name }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "ChildRow",
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeStatus(id, email, status) {
      let message = "activar";
      if (status == "Activo") {
        message = "inactivar";
      }

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
            .post("api/users/changeStatus", { id })
            .then((res) => {
              loader.hide();
              if (res.data.transaction.status == true) {
                this.$emit('refreshData')
                let messageFinal = "activo";
                if (message == "inactivar") {
                  messageFinal = "inactivo";
                }

                this.$swal({
                  icon: "success",
                  html: `Se <b>${messageFinal}</b> el usuario con correo electronico <b>${email}</b> exitosamente.`,
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
                  "Ocurrio un problema al cambiar el estado del usuario.",
              });
            });
        }
      });
    },
  }
}
</script>
<style lang="scss">
.w-100 {
  th {
   border: 2px solid #00bf9a; 
   color: #00bf9a;
   text-transform: capitalize !important;
   font-size: 12px !important;
  }

  td {
    border: 2px solid #00bf9a;
  }

  
}
</style>