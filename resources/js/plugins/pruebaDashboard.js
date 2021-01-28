import pruebaComponents from "./pruebaComponents";
import SidebarPlugin from "../components/Sidebar";
import clickOutside from "./click-outside";

export default {
    install(Vue){
        Vue.use(pruebaComponents);
        Vue.use(SidebarPlugin);
        Vue.directive("click-outside", clickOutside);
    }
}