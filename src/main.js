import Vue from "vue";
import App from "./App";
import router from "./router/index";

import store from './store'
//notify
import VueNotify from 'vue-notifyjs'
import 'vue-notifyjs/themes/default.css'
Vue.use(VueNotify)
//Fin notify
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


//conexion a hasura
Vue.config.productionTip = false;
Vue.use(VueApollo)

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo from 'vue-apollo';

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return headers
}

const httpLink = new HttpLink({
  uri: 'https://nearby-marlin-40.hasura.app/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    appTypename: true
  })
})

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
//fin conexion hasura

//inicio auth0




//fin auth0

Vue.use(PaperDashboard);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// start app

new Vue({
  el: '#app',
  store,
  data: {
    showModal: false
  },
  router,
  apolloProvider,

  render: h => h(App)
}).$mount("#app");
