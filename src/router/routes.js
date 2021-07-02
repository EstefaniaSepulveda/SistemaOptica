import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";

import Login from "@/pages/Login";
import Registro from "@/pages/Registro.vue";

import Stock from "@/pages2/Stock.vue";
import Pedido from "@/pages2/Pedido.vue";

import Transferencia from "@/cliente/Transferencia.vue";
import Recuperar from "@/pages/Recuperar.vue"
import Receta from "@/cliente/Receta.vue";
import CarroCompra from "@/cliente/CarroCompra.vue";
import Cristales from "@/cliente/Cristales.vue";
import ProductoItem from "@/cliente/ProductoItem.vue";
import ProductoList from "@/cliente/ProductoList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Home",
    children: [
      {
        path: "recuperar",
        name: "Recuperar",
        component: Recuperar,
      },
      {
        path: "pedido",
        name: "Pedido",
        component: Pedido,
      },
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "receta",
        name: "Receta",
        component: Receta,
      },
      {
        path: "transferencia",
        name: "Transferencia",
        component: Transferencia,
      },
      {
        path: "stock",
        name: "Stock",
        component: Stock,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "carroCompra",
        name: "Carro",
        component: CarroCompra,
      },
      {
        path: "cristales",
        name: "Cristales",
        component: Cristales,
      },
      {
        path: "productoItem",
        name: "productos",
        component: ProductoItem,

      },
      {
        path: "registro",
        name: "registro",
        component: Registro
      },
      {
        path: "productoList",
        name: "Productos",
        component: ProductoList
      },
      /*{
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      } */
    ]
  },
  { path: "*", component: NotFound }
];

const router = new Router({
  routes
});
/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
