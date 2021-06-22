<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="armazon in cart" :key="armazon.idArmazon">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ armazon.nombreMarca }}</strong>
          <br />
          {{ armazon.color }}
          ${{ armazon.valor }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removerArmazonDelCarro(armazon)"
            >Eliminar</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <!--<span>Total: ${{ cartTotalPrice }}</span>-->
      <a href="#" @click.prevent="limpiarCarro()">Limpiar carro</a>
    </div>

    <div class="d-flex justify-content-between">
      <button @click.prevent="acceptCart()">Realizar Pedido</button>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "CarroCompra",

  data() {
    return {};
  },

  computed: {
    cart() {
      return this.$store.getters.getcarroCompra;
    },
  },

   methods: {
    removeProduremoverArmazonDelCarroctFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },

    limpiarCarro() {
      this.$store.dispatch("clearCart");
    },

    acceptCart() {
      router.push({ name: "Transferencia" });
    },
  },

};
</script>

<style scoped>
</style>
