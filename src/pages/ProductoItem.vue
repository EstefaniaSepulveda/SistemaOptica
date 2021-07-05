<template>
  <div>
    <card class="card-user">
      <div class="wrap-imagen" slot="image">
        <img class="imagen" :src="armazon.imagen" />
      </div>
      <div>
        <div class="datos text-center">
          <h1>Valor: ${{ armazon.valor }}</h1>
          <p>Color: {{ armazon.color }}</p>
          <p>Marca: {{ armazon.marca.nombreMarca }}</p>
          <p>Material: {{ armazon.material }}</p>
          <h3>Stock: {{ armazon.stock }}</h3>
        </div>
      </div>
      <div>
        <!--AQUI MODAL-->
        <div>
          <b-button v-if="perfil === 'cliente'" @click="showModal = !showModal"
            >Seleccionar Cristal</b-button
          >

          <b-modal size="xl" v-model="showModal" id="modal-1">
            <cristales></cristales>
          </b-modal>

          <b-button
            v-if="perfil === 'cliente'"
            @click="agregarCarrito()"
            class="agregarCarrito"
            variant="primary"
          >
            Añadir al Carrito
          </b-button>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";
import { mapGetters } from "vuex";
import Cristales from "./Cristales";
import carroCompra from "./CarroCompra";
export default {
  name: "ProductoItem",
  props: ["armazon"],
  components: { Card, PButton, Cristales, carroCompra },

  data() {
    return {
      showModal: false,
      toggleModal: false,
      type: ["success"],
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

    agregarCarrito() {
      this.armazon = { ...this.armazon };
      this.$store.commit("setArmazonActual", this.armazon);

      this.notifyVue("top", "right");
    },
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
    }),
  },
};
</script>

<style scoped>
.wrap-imagen {
  text-align: center;
}

.card .card-image {
  width: 100%;
  border-radius: none;
  height: 152px;
}
.card {
  width: 30%;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

</style>