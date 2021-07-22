<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col
          ><b-button
            style="
              background-color: transparent;
              border-color: black;
              color: black;
            "
            v-if="perfil === 'cliente' || perfil === 'admin'"
            @click="logout()"
            name="Log out"
            >Cerrar Sesión</b-button
          ></b-col
        >
      </b-row>
    </b-container>
    
    <card class="carro">
      <div v-for="armazon in cart" :key="armazon.idArmazon">
        <div class="d-flex justify-content-between">
          <div>
            <strong>{{ armazon.marca.nombreMarca }}</strong>
            <br/>
            {{armazon.color}}
            <br/>
            {{armazon.material}}
            <br />
            ${{ armazon.valor }}
          </div>
          <div>
            <a
              href="#"
              class="badge badge-secondary"
              @click.prevent="removerArmazonDelCarro(armazon)"
              >Remover</a
            >
          </div>
        </div>
        <hr />
      </div>
    </card>

    <div class="d-flex justify-content-between">
      <span>Total: ${{ precioTotal }}</span>
      <a href="#" @click.prevent="clearCartItems()">Limpiar carro</a>
    </div>

    <div class="d-flex justify-content-between">
      <button @click.prevent="acceptCart()">Realizar Pedido</button>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CarroCompra",

  computed: {
    ...mapGetters({
      perfil: "getPerfil",
      getPrecioTotalCarro: "getPrecioTotalCarro"
    }),
    
    cart() {
      return this.$store.getters.getCarroCompra;
    },
     precioTotal() {
      return this.$store.getters.getPrecioTotalCarro;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("cambiarLogin", false);
      this.$store.dispatch("cambiarPerfil", "");
      this.$router.push({ path: "Home" });
    },
    removerArmazonDelCarro(armazon) {
      this.$store.dispatch("removerArmazonDelCarro", armazon);
    },

    clearCartItems() {
      this.$store.dispatch("limpiarCarro");
    },

    acceptCart() {
      router.push({ name: "Receta" });
    },
  },
};
</script>

<style scoped>
</style>