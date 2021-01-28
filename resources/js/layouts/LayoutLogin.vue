<template>
    <div class="main-content bg-default" style="height: 100vh !important">
        <div class="header bg-gradient-warning py-7 py-lg-8 pt-5">
            <b-container>
                <div class="header-body text-center mb-5 pb-5">
                    <b-row class="justify-content-center">
                        <b-col lg="5" md="6">
                            <h1 class="text-white">Bienvenido!</h1>
                            <p class="text-lead text-white">
                                Ingresa con tu correo electronico y contraseña para poder ingresar y trabajar al maximo!, si no tienes una cuenta activa <a href="/register">da click aqui.</a>
                            </p>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center" style="padding-bottom: 91px;">
                        <b-col lg="6" md="6">
                            <h3 class="text-lead text-white mt-3 mb-0">
                                <strong>Por Tu Seguridad!</strong>
                            </h3>
                            <ol class="text-white mt-3 mb-0" style="list-style:none">
                                <li>Ingresas con tu correo electronico y tu contraseña.</li>
                                <li>y a tu correo electronico te llegara el codigo de verificación con el cual podras validar el inicio de sesion.</li>
                            </ol>
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
            <Login/>
        </b-container>
    </div>
</template>
<script>
import Login from "../views/Auth/Login/Login";
export default {
    name: "LayoutLogin",
    components: { Login },
    mounted(){
        document.getElementById('title').innerText = "Ingresar - Prueba Acceso";
    }
}
</script>