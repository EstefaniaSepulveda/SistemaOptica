<template>
  <div class="wrapper">
    
    <side-bar>
      
      <template slot="links">
        <sidebar-link v-if="!login" to="/login" name="Login" icon="ti-user" />
        
        <sidebar-link
          v-if="perfil === 'cliente'"
          to="/productoList"
          name="Producto List"
          icon="ti-eye"
        />
        <sidebar-link
          v-if="perfil === 'cliente'"
          to="/CarroCompra"
          name="Carro"
          icon="ti-eye"
        />

        <sidebar-link
          v-if="perfil === 'admin'"
          to="/Stock"
          name="Catálogo"
          icon="ti-eye"
        />
        <sidebar-link
          v-if="perfil === 'admin'"
          to="/Pedidos"
          name="Pedidos"
          icon="ti-eye"
        />
      </template>
      <button v-if="login" @click="logout()" name="Log out">Log out</button>
      <mobile-menu>
        <drop-down
          class="nav-item"
          title="Cuenta"
          title-classes="nav-link"
          icon="ti-user"
        >
        </drop-down>

        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import SideBar from "../../components/SidebarPlugin/SideBar.vue";
import SidebarLink from "../../components/SidebarPlugin/SidebarLink.vue";
import { mapGetters, mapActions } from "vuex";
import Button from '../../components/Button.vue';

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SideBar,
    SidebarLink,
    Button,
  },
  methods: {
    logout(){
      this.$store.dispatch('cambiarLogin',false)
      this.$store.dispatch('cambiarPerfil','')
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },

    ...mapActions(["cambiarLogin", "cambiarPerfil"]),
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
      login: "getLogin",
    }),
  },
};
</script>

<style>
::v-deep .wrapper .sidebar .nav .nav-item.active .nav-link {
  color: #fff;
}
</style>