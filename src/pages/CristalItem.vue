<template>
  <div :key="cristal.idCristal">
    <card class="card-user">
      <div>
        <div class="datos text-center">
          <h1>Cristal: {{ cristal.nombreCristal }}</h1>
          <p>Descripción: {{ cristal.descripcion }}</p>
        </div>
      </div>
      <div>
        <p-button type="info" simple>Agregar al Carro</p-button>
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "@/components";
import { Button as PButton } from "@/components";

export default {
  name: "CristalItem",
  props: ["cristal"],
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