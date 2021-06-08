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
        <!--AQUI QUIERO EL MODAL-->
        <div>
          <b-button @click="showModal = !showModal"
            >Seleccionar Cristal</b-button
          >

          <b-modal size="xl" v-model="showModal" id="modal-1">
            <cristales></cristales>

            <b-button @click="toggleModal">Carro</b-button>
            
          </b-modal>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";

import Cristales from "./Cristales";
import carroCompra from "./CarroCompra";
export default {
  name: "ProductoItem",
  props: ["armazon"],
  components: { Card, PButton, Cristales, carroCompra },

  data() {
    return {
      showModal: false,
      toggleModal: false
    };
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