<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
    <ul class="navbar-nav align-items-center d-none d-md-flex mr-3 d-none d-md-flex ml-lg-auto">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" width="36" height="36" />
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">{{ user.fullname }}</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Bienvenido!</h6>
            </div>
            
            <div class="dropdown-divider"></div>
            <span class="dropdown-item">
              <i class="fa fa-exit"></i>
              <a @click="logout">Logout</a>
            </span>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
export default {
  name: "DashboardNavbar",
  data: () => ({
    activeNotifications: false,
    showMenu: false,
    searchQuery: "",
    user: {}
  }),
  created(){
    this.getUser();
  },
  methods: {
    getUser(){
      let loader = this.$loading.show()
      axios.get('api/users/getUser')
      .then((res) => {
        loader.hide();
        if(res.data.transaction.status == true){
          this.user = res.data.data
        }else{
          this.$swal({
            icon: "error",
            text: "Ocurrio un problema al momento de obtener el usuario."
          })
        }
      }).catch((err) => {
        loader.hide();
        console.log(err);
        this.$swal({
            icon: "error",
            text: "Ocurrio un problema al momento de obtener el usuario."
          })
      });
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  watch: {
    "$store.getters.StateUser": function () {
      this.name = this.$store.getters.StateUser;
    },
  },
};
</script>