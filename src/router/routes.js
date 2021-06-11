import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

import Vue from "vue";
import Router from "vue-router";


import Home from "@/pages/Home.vue";

import { authGuard } from "../auth/index";

import Registro from "@/pages/Registro.vue";
import ArmazonAcetato from "@/pages/ProductoList.vue";
import ArmazonMetal from "@/pages/ProductoItem.vue";
import Cristales from "@/pages/Cristales.vue";
import CarroCompra from "@/pages/CarroCompra.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
     
      {
        path: "carroCompra",
        name: "Carro",
        component: CarroCompra,
        beforeEnter: authGuard
      },
      {
        path: "cristales",
        name: "Cristales",
        component: Cristales,
        beforeEnter: authGuard
      },
      {
        path: "armazonMetal",
        name: "armazones de metal",
        component: ArmazonMetal,
        beforeEnter: authGuard
      },
      {
        path: "registro",
        name: "registro",
        component: Registro
      },
      {
        path: "armazonAcetato",
        name: "Productos",
        component: ArmazonAcetato
      },/*
      {
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
      }*/
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
