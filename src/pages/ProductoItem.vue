<template>
  <div>
    <div>
      <div name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header"> default header </slot>
              </div>

              <div class="modal-body">
                <slot name="body"> default body </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  data() {
    return {
      showModal: false,
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