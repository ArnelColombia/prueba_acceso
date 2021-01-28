import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from "vue-router";
import Loading from "vue-loading-overlay";
import VueSweetalert2 from 'vue-sweetalert2';
import { ServerTable, Event } from "vue-tables-2";
import vSelect from 'vue-select';

/* Components */
import App from "./App.vue";
import router from "./router";
import pruebaDashboard from "./plugins/pruebaDashboard";
import bg from "./plugins/bg";

/* Vue Uses */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(pruebaDashboard);
Vue.use(VueRouter);
Vue.use(Loading, {
    color: "red",
    loader: "spinner",
});
Vue.use(VueSweetalert2);
Vue.use(ServerTable,{
    perPage: 15,
    texts: {
        count: "Mostrando del {from} al {to} de {count} Registros|{count} Registros|1 Registro",
        first: "First",
        last: "Last",
        filter: "",
        records:"......",
        filterPlaceholder: "Buscar registro",
        limit: "",
        page: "Page:",
        noResults: "No encontramos nada.",
        filterBy: "{column}",
        loading: "Cargando...",
        defaultOption: "Todos",
        columns: "Columnas"
    }
});
Vue.use(bg);

/* Vue Components */
Vue.component('v-select', vSelect);

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./assets/scss/prueba.scss";
import "./bootstrap";
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-select/dist/vue-select.css';

new Vue({
    el: "#app",
    components: { App },
    router: router
});