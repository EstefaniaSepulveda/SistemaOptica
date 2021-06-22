<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        
        <sidebar-link to="/login" name="Login" icon="ti-user" />
        <sidebar-link to="/carroCompra" name="Carro" icon="ti-eye" />
        

        <!--<sidebar-link to="/cristales" name="Cristal" icon="ti-eye"/>
       
        <sidebar-link to="/login" name="Login" icon="ti-eye"/>
        <sidebar-link to="/register" name="Register" icon="ti-eye"/>
        <sidebar-link to="/armazonMetal" name="Armazon Metalico" icon="ti-eye"/>
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-eye"/>
        <sidebar-link to="/stats" name="User Profile" icon="ti-user"/>
        <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>
        <sidebar-link to="/typography" name="Typography" icon="ti-text"/>
        <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
        <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>-->
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
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SideBar,
    SidebarLink,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style>
::v-deep .wrapper .sidebar .nav .nav-item.active .nav-link {
  color: #fff;
}
</style>