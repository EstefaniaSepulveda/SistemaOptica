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
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Nombre", "Valor"];
const tableData = [];

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table: {
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style scoped>
</style>
