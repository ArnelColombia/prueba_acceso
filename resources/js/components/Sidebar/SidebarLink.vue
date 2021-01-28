<template>
    <li class="nav-item">
        <router-link
                :to="link.path"
                @click.native="linkClick"
                class="nav-link"
                :target="link.target"
                :href="link.path">
            <template>
                <i :class="link.icon"></i>
                <span class="nav-link-text">{{ link.name }}</span>
            </template>
        </router-link>
    </li>
</template>
<script>
export default {
    name: "SidebarLink",
    props: {
        link: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    path: '',
                    children: []
                }
            }
        }
    },
    inject: {
        autoClose: {
            default: true
        }
    },
    data: () => ({
        children: [],
        collapsed: true
    }),
    methods: {
        linkClick(){
            if(this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true){
                this.$sidebar.displaySidebar(false);
            }
        }
    }
} 
</script>