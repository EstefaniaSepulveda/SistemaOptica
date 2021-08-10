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
            <h1>
              <strong>Marca: {{ armazon.marca.nombreMarca }}</strong>
            </h1>
            <h2>Color: {{ armazon.color }}</h2>
            <h2>Material: {{ armazon.material }}</h2>
            <h2>Valor: ${{ armazon.valor }}</h2>
            <h6>Código: {{ armazon.idArmazon }}</h6>
          </div>
          <div>
            <a
              v-if="armazon.hasOwnProperty('idArmazon')"
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

    <card class="carro2">
      <div v-for="cristal in cart2" :key="cristal.idCristal">
        <div class="d-flex justify-content-between">
          <div>
            <h1>
              <strong>Nombre Cristal: {{ cristal.nombreCristal }}</strong>
            </h1>

            <h2>Valor: ${{ cristal.valorCristal }}</h2>
            <h2>Descripción: {{ cristal.descripcion }}</h2>
            <h6>Código: {{ cristal.idCristal }}</h6>
          </div>
          <div>
            <a
              v-if="cristal.hasOwnProperty('idCristal')"
              href="#"
              class="badge badge-secondary"
              @click.prevent="removerCristalDelCarro(cristal)"
              >Remover</a
            >
          </div>
        </div>
        <hr />
      </div>
    </card>
    <div class="d-flex justify-content-between">
      <h4>
        <strong
          ><span>Total: ${{ precioTotal }}</span></strong
        >
      </h4>

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
    }),

    cart() {
      return this.$store.getters.getCarroCompraArmazon;
    },
    cart2() {
      return this.$store.getters.getCarroCompraCristal;
    },
    precioTotal() {
      let total =
        this.$store.getters.getPrecioTotalA +
        this.$store.getters.getPrecioTotalC;
      return total;
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

    removerCristalDelCarro(cristal) {
      this.$store.dispatch("removerCristalDelCarro", cristal);
    },

    clearCartItems() {
      this.$store.dispatch("limpiarCarro");
    },

    acceptCart() {
      if (
        this.$store.getters.getCarroCompraArmazon == 0 &&
        this.$store.getters.getCarroCompraCristal == 0
      ) {
        alert("Carro vacio");
      } else {
        if (this.$store.getters.getCarroCompraArmazon == 0) {
          alert("Falta armazón en carro");
        } else {
          if (this.$store.getters.getCarroCompraCristal == 0) {
            alert("Falta cristal en carro");
          }else{
            router.push({ name: "Receta" });
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.card-body {
  font-size: 100%;
}
</style>