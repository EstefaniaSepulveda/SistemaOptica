<template>
  <div :key="armazon.idArmazon">
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
        <p-button type="info" simple>Seleccionar Cristal</p-button>
        
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";

export default {
  name: "ProductoItem",
  props: ["armazon"],
  components: { Card, PButton },
};
</script>

<style scoped>
.wrap-imagen {
  text-align: center;
}

.card .card-image img {
  width: 100%;
  border-radius: none;
}
.card {
  width: 30%;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>