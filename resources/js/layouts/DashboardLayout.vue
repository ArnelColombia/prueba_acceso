<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <sidebar
      :background-color="sidebarBackground"
      short-title="Prueba"
      title="Prueba"
    >
      <template slot="links">
        <sidebar-link :link="{ 
            name: 'Ciudades', 
            icon: 'fas fa-city',
            path: '/cities' }"/>

        <sidebar-link :link="{ 
            name: 'Usuarios', 
            icon: 'far fa-user',
            path: '/users' }"/>

        <sidebar-link :link="{ 
            name: 'Clientes', 
            icon: 'fas fa-user-friends',
            path: '/customers' }"/>
      </template>
    </sidebar>
    <div class="main-content" style="margin-left:250px">
      <dashboard-navbar :data="sidebarBackground"></dashboard-navbar>
        <div @click="toggleSidebar">
          <fade-transition :duration="200" origin="center top" mode="out-in">
            <router-view></router-view>
          </fade-transition>
        </div>
    </div>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import DashboardNavbar from "./DashboardNavbar";
export default {
  name: "DashboardLayout",
  components: { FadeTransition, DashboardNavbar },
  data: () => ({
    sidebarBackground: "warning",
  }),
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>