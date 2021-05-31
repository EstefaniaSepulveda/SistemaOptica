import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";



import Registro from "@/pages/Registro.vue";
import ArmazonAcetato from "@/pages/ProductoList.vue";
import ArmazonMetal from "@/pages/ProductoItem.vue";
import Cristales from "@/pages/Cristales.vue";
import CarroCompra from "@/pages/CarroCompra.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/armazonAcetato",
    children: [
      {
        path: "carroCompra",
        name: "Carro",
        component: CarroCompra
      },
      {
        path: "cristales",
        name: "Cristales",
        component: Cristales
      },
      {
        path: "armazonMetal",
        name: "armazones de metal",
        component: ArmazonMetal
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

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;