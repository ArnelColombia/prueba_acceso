<template>
  <b-row class="justify-content-center">
    <b-col lg="6" md="7">
      <card class="bg-secondary shadow border-0">
        <template name="header">
          <div class="bg-transparent text-muted text-center mt-2 mb-3">
            <h4>Ingreso!</h4>
          </div>
        </template>
        <hr />
        <div class="card-body px-lg-5">
          <div class="text-center text-muted mb-4">
            <small
              >Activa y crea tu contraseña para poder acceder al sistema.</small
            >
          </div>
          <form role="form">
            <b-row>
              <b-col md="12">
                <base-input
                  label="Ingresa Tu Contraseña"
                  v-model="user.password"
                  type="password"
                ></base-input>
              </b-col>
              <b-col md="12">
                <base-input
                  label="Confirma Tu Contraseña"
                  v-model="user.confirmPassword"
                  type="password"
                ></base-input>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-center mt-3">
              <base-button type="primary" :block="false" @click="createUser"
                >Guardar</base-button
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
    email: null,
  }),
  mounted() {
    const { email } = this.$route.query;
    this.user.email = email;
  },
  methods: {
    createUser() {
      if (this.user.password != this.user.confirmPassword) {
        this.$swal({
          icon: "error",
          text: "No coinciden las contraseñas.",
        });
      } else {
        let loader = this.$loading.show();
        axios
          .post("api/users/activeUser", this.user)
          .then((res) => {
            loader.hide();
            if (res.data.transaction.status == true) {
              this.$swal({
                icon: "success",
                html: res.data.message.content,
              }).then((res) => {
                if (res.value) {
                  window.location = "/login";
                }
              });
              this.$route;
            } else {
              this.$swal({
                icon: "error",
                html: res.data.message.content,
              }).then((res) => {
                if (res.value) {
                  window.location = "/login";
                }
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