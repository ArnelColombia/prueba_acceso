<template>
    <b-row class="justify-content-center">
        <b-col lg="5" md="7">
            <card class="bg-secondary shadow border-0">
                <template name="header">
                    <div class="bg-transparent text-muted text-center mt-2 mb-3"><h4>Ingreso!</h4></div>
                </template>
                <hr/>
                <div class="card-body px-lg-5" v-if="!verificationCode">
                    <div class="text-center text-muted mb-4">
                        <small>Ingresa con tu correo electronico y tu contraseña.</small>
                    </div>
                    <form role="form">
                        <base-input
                            placeholder="Ingresa Tu Correo Electronico"
                            addonLeftIcon="far fa-user"
                            v-model="user.email"
                            type="email"
                        ></base-input>
                        <base-input
                            placeholder="Ingresa Tu Contraseña"
                            addonLeftIcon="fas fa-key"
                            v-model="user.password"
                            type="password"
                        ></base-input>
                        <div class="text-center">
                            <base-button type="primary" :block="false" class="my-4" @click.prevent="authUser()">Ingresar</base-button>
                        </div>
                    </form>
                </div>
                <div class="card-body px-lg-5" v-else>
                    <div class="text-center text-muted mb-4">
                        <p>Acabamos de enviar el codigo de verificación a tu correo electronico, el mismo que ingresaste para loguearte. Recuerda que el codigo de verificación puede llegar tambien al spam del correo electronico</p>
                    </div>
                    <form role="form">
                        <base-input
                            placeholder="Ingresa El Codigo De Verificación"
                            addonLeftIcon="far fa-key"
                            v-model="user.code"
                            type="number"
                        ></base-input>
                        <div class="text-center">
                            <base-button type="primary" :block="false" class="my-4" @click.prevent="validateUser()">Validar</base-button>
                        </div>
                    </form>
                </div>
            </card>
        </b-col>
    </b-row>
</template>
<script>
export default {
    name: "Login",
    data: () => ({
        verificationCode: false,
        user: {
            email: null,
            password: null,
            code: null
        }
    }),
    methods: {
        authUser(){
            let loader = this.$loading.show();
            axios.post("api/auth/login", this.user)
            .then((res) => {
                loader.hide();
                if(res.data.transaction.status == true){
                    this.verificationCode = true;
                }else{
                    this.$swal({
                        icon: "error",
                        text: res.data.message.content
                    })
                }
            }).catch((err) => {
                loader.hide();
                console.log(err);
                this.$swal({
                    icon: "error",
                    text: "Ocurrio un error al momento de ingresar al backoffice."
                });
            });
        },

        validateUser(){
            let loader = this.$loading.show();
            axios.post("api/auth/verificationCode", this.user)
            .then((res) => {
                loader.hide();
                if(res.data.transaction.status == true){
                    this.$swal({
                        icon: "success",
                        text: res.data.message.content
                    });
                    localStorage.setItem("accessToken", JSON.stringify(res.data.data.token));
                    localStorage.setItem("roles", JSON.stringify(res.data.data.roles));
                    localStorage.setItem("permissions", JSON.stringify(res.data.data.permissions));
                    window.location = "/"
                }else{
                    this.$swal({
                        icon: "error",
                        text: res.data.message.content
                    })
                }
            }).catch((err) => {
                loader.hide();
                console.log(err);
                this.$swal({
                    icon: "error",
                    text: "Ocurrio un error al momento de ingresar al backoffice."
                });
            });
        }
    }
}
</script>