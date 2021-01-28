import { Card, BaseInput, BaseButton, BaseNav, BaseDropdown } from "../components";

const globalComponents = {
    install(Vue){
        Vue.component("card", Card);
        Vue.component("base-input", BaseInput);
        Vue.component("base-button", BaseButton);
        Vue.component("base-nav", BaseNav);
        Vue.component("base-dropdown", BaseDropdown);
    }
};

export default globalComponents;