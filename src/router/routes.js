import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Router from "vue-router";

//inicio
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login";
import Registro from "@/pages/Registro.vue";
import NotFound from "@/pages/NotFoundPage.vue";

//admin
import Stock from "@/pages/Stock.vue";
import Pedido from "@/pages/Pedido.vue";
import AddProducto from "@/pages/AddProducto.vue";
import UpdateArmazon from "@/pages/UpdateArmazon.vue"
import Imagen from "@/pages/Imagen.vue"
import EliminarProducto from "@/pages/EliminarProducto.vue"
//cliente
import Transferencia from "@/pages/Transferencia.vue";
import Receta from "@/pages/Receta.vue";
import CarroCompra from "@/pages/CarroCompra.vue";
import Cristales from "@/pages/Cristales.vue";
import ProductoItem from "@/pages/ProductoItem.vue";
import ProductoList from "@/pages/ProductoList.vue";
import CristalesItem from "@/pages/CristalesItem.vue"
import ModificarEstado from "@/pages/ModificarEstado.vue"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Home",
    children: [
      {
        path: "ModificarEstado",
        name: "ModificarEstado",
        component: ModificarEstado,
      },
      {
        path: "EliminarProducto",
        name: "EliminarProducto",
        component: EliminarProducto,
      },
      {
        path: "CristalesItem",
        name: "CristalesItem",
        component: CristalesItem,
      },
      {
        path: "Imagen",
        name: "Imagen",
        component: Imagen,
      },
      
      {
        path: "UpdateArmazon",
        name: "Update",
        component: UpdateArmazon,
      },
      {
        path: "AddProducto",
        name: "AddProducto",
        component: AddProducto,
      },
      {
        path: "Pedido",
        name: "Pedido",
        component: Pedido,
      },
      {
        path: "Home",
        name: "Home",
        component: Home,
      },
      {
        path: "Receta",
        name: "Receta",
        component: Receta,
      },
      {
        path: "Transferencia",
        name: "Transferencia",
        component: Transferencia,
      },
      {
        path: "Stock",
        name: "Stock",
        component: Stock,
      },
      {
        path: "Login",
        name: "Login",
        component: Login,
      },
      {
        path: "CarroCompra",
        name: "Carro",
        component: CarroCompra,
      },
      {
        path: "Cristales",
        name: "Cristales",
        component: Cristales,
      },
      {
        path: "ProductoItem",
        name: "ProductosItem",
        component: ProductoItem,

      },
      {
        path: "Registro",
        name: "Registro",
        component: Registro
      },
      {
        path: "ProductoList",
        name: "Productos",
        component: ProductoList
      },
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
