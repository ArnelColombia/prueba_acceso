import Sidebar from "./Sidebar.vue";
import SidebarLink from "./SidebarLink.vue";

const SidebarStore = {
    showSidebar: false,
    sidebarLinks: [],
    isMinimized: false,
    displaySidebar(value){
        this.showSidebar = value;
    },
    toggleMinimize(){
        document.body.classList.toggle('sidebar-mini');
        const simulateWindowResize = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        setTimeout(() => {
            clearInterval(simulateWindowResize);
        }, 1000);

        this.isMinimized = !this.isMinimized;
    }
};

const SidebarPlugin = {
    install(Vue, options){
        if(options && options.sidebarLinks){
            SidebarStore.sidebarLinks = options.sidebarLinks;
        }

        let app = new Vue({
            data: {
                sidebarStore: SidebarStore
            }
        });

        Vue.prototype.$sidebar = app.sidebarStore;
        Vue.component("sidebar", Sidebar);
        Vue.component("sidebar-link", SidebarLink);
    }
};

export default SidebarPlugin;