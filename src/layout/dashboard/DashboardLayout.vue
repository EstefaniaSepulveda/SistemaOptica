<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <b-button style="background-color: #3a8e99">
          <sidebar-link
            @click="login()"
            v-if="!login"
            to="/Login"
            name="Login"
            icon="ti-user"
          />
        </b-button>

        <!--<button v-if="login" @click="logout()" name="Log out">Log out</button>-->

        <sidebar-link
          v-if="perfil === 'cliente'"
          @click.prevent="producto()"
          to="/productoList"
          name="Producto"
          icon="ti-eye"
        />
        <sidebar-link
          v-if="perfil === 'cliente'"
          @click.prevent="carro()"
          to="/CarroCompra"
          name="Carro"
          icon="ti-eye"
        />

        <sidebar-link
          v-if="perfil === 'admin'"
          @click.prevent="stock()"
          to="/Stock"
          name="Stock"
          icon="ti-eye"
        />
        <sidebar-link
          v-if="perfil === 'admin'"
          @click.prevent="pedido()"
          to="/Pedido"
          name="Pedido"
          icon="ti-eye"
        />
      </template>

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
import Button from "../../components/Button.vue";
import routes from "../../router/routes";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SideBar,
    SidebarLink,
    Button,
    routes,
  },
  methods: {
    ...mapActions(["cambiarLogin", "cambiarPerfil"]),

    login() {
      this.$router.push({ path: "Login" });
    },

    carro() {
      this.$router.push({ path: "CarroCompra" });
    },
    producto() {
      this.$router.push({ path: "Producto" });
    },

    pedido() {
      this.$router.push({ path: "Pedido" });
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
      login: "getLogin",
    }),
  },
};
</script>

<style scoped>
::v-deep .wrapper .sidebar .nav .nav-item.active .nav-link {
  color: #fff;
}
.btn{
  border-color: #3a8e99;
}

</style>