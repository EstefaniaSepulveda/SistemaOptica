<template>
  <div>
    <div class="card-deck">
      <card class="card text-center">
        <div>
          <div class="datos text-center">
            <h1>{{ cristal.nombreCristal }}</h1>
            <p>Descripción: {{ cristal.descripcion }}</p>
            <p>Valor: {{ cristal.valorCristal }}</p>
          </div>
        </div>
        <div>
          <b-button
            @click="agregarCarrito(cristal)"
            class="agregarCarrito"
            variant="primary"
          >
            Añadir al Carrito
          </b-button>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CristalesItem",
  props: ["cristal"],
  components: { Card, PButton },

  data() {
    return {
      showModal: false,
      toggleModal: false,
      type: ["success", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: "Enviado al carro de compra",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },

    agregarCarrito(cristal) {
      this.$store.dispatch("agregarCristalCarro", cristal);
      this.notifyVue("top", "right");
    },
  },
  computed: {
    ...mapActions({
      getCarroCompraCristal: "getCarroCompraCristal",
    }),
  },
};
</script>

<style>
.col-md-6 {
  display: flex !important;
}
.card-user {
  width: 80%;
}
</style>