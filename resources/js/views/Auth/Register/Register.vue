<template>
    <div class="main-content bg-default" style="height: 100vh !important;">
        <div class="header bg-gradient-warning py-7 py-lg-8 pt-5">
            <b-container>
                <div class="header-body text-center mb-5 pb-5">
                    <b-row class="justify-content-center">
                        <b-col lg="5" md="6" style="padding-top: 0px; padding-bottom: 50px;">
                            <h1 class="text-white">Bienvenido!</h1>
                            <p class="text-lead text-white">
                                Registrate con tu correo electronico, si ya tienes una cuenta activa <a href="/login" class="text-white">da click aqui.</a>
                            </p>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        <b-container class="mt--8 pb-5">
            <FormRegister/>
        </b-container>
    </div>
</template>
<script>
import FormRegister from "./components/FormRegister";
export default {
    name: "LayoutLogin",
    components: { FormRegister },
    mounted(){
      document.getElementById('title').innerText = "Registro - Prueba Acceso";
    }
}
</script>