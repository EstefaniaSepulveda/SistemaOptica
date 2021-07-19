<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <card class="card-user">
          <div class="wrap-imagen" slot="image">
            <img class="imagen" :src="armazon.imagen" />
          </div>
          <div>
            <div class="datos text-center">
              <h1 v-if="perfil === 'admin'">Id: {{ armazon.idArmazon }}</h1>
              <h1>Valor: ${{ armazon.valor }}</h1>
              <p>Color: {{ armazon.color }}</p>
              <p>Marca: {{ armazon.marca.nombreMarca }}</p>
              <p>Material: {{ armazon.material }}</p>
              <h3>Stock: {{ armazon.stock }}</h3>
            </div>
          </div>
          <div>
            <!--AQUI MODAL CRISTALES-->
            <div>
              <b-button
                v-if="perfil === 'cliente'"
                @click="showModal = !showModal"
                >Seleccionar Cristal</b-button
              >

              <b-modal size="xl" v-model="showModal" id="modal-1">
                <cristales></cristales>
              </b-modal>

              <b-button
                v-if="perfil === 'cliente'"
                @click="agregarCarrito(armazon.idArmazon)"
                class="agregarCarrito"
                variant="primary"
              >
                Añadir al Carrito
              </b-button>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";
import { mapGetters } from "vuex";
import Cristales from "./Cristales";
import carroCompra from "./CarroCompra";
import UpdateArmazon from "./UpdateArmazon.vue";
export default {
  name: "ProductoItem",
  props: ["armazon"],
  components: { Card, PButton, Cristales, UpdateArmazon },

  data() {
    return {
      showModal: false,
      toggleModal: false,
      type: ["success","info", "success", "warning", "danger"],
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

    agregarCarrito(idArmazon) {
      this.$store.dispatch("carroCompra", idArmazon);

      /*
      this.armazon = { ...this.armazon };
      this.$store.commit("setArmazonActual", this.armazon);*/

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
.col-md-6 {
  display: flex !important;
}
.card-user{
  width: 80%;
}
</style>