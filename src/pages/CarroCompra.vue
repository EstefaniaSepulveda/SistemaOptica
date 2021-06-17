<template>
  <div class="row">
    <!--<div class="col-12">
      <card>
        <div v-for="armazon in cart" :key="armazon.id">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table.data" :columns="table.columns">
            </paper-table>

            <a
              href="#"
              class="badge badge-danger"
              @click.prevent="eliminarProducto(armazon, cristal)"
            >
              Eliminar</a
            >
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button @click.prevent="aceptarCarro()">Realizar Pedido</button>
        </div>
      </card>
    </div>-->
    
        <FilePond allowMultiple="true"/>
      
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Nombre", "Valor"];
const tableData = [];

export default {
  components: {
    PaperTable,
    FilePond: vueFilePond(),
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
