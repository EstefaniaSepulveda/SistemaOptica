<template>
  <div>
    <div class="row">
      <card title="Cristales">
        <div slot="raw-content" class="table-responsive">
          <paper-table
            type="hover"
            class="col-12"
            :data="tableData"
            :columns="table.columns"
          >
            <div slot-scope="{ row }">
              <td>{{ row.nombreCristal }}</td>
              <td>
                <b>{{ row.descripcion }}</b>
              </td>
              <td>${{ row.valorCristal }}</td>
              <td>
                <p-button class="agregarCarrito" type="success" icon @click="agregarCarrito(row)">
                  <i class="ti ti-check"></i>
                </p-button>    
              </td>
            </div>
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { PaperTable } from "@/components";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

const tableColumns = ["Nombre", "Detalle", "Valor"];

const GET_CRISTAL = gql`
  query getCristales {
    cristal(order_by: { idCristal: asc }) {
      nombreCristal
      descripcion
      valorCristal
      idCristal
    }
  }
`;

export default {
  name: "Cristales",
  components: { PaperTable },

  data() {
    return {
      cristales: [],
      cristal: {},

      table: {
        columns: [...tableColumns],
      },
    };
  },
  computed: {
    tableData: function () {
      if (this.cristales && this.cristales.length) {
        return this.cristales;
      }
      return [];
    },
  },
  apollo: {
    cristales: {
      query: GET_CRISTAL,
      update: (data) => data.cristal,
    },
  },
};
</script>

<style>
.card-body {
  font-size: 7px;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
}
</style>

<style scoped>
.btn-success {
  background-color: #229863;
  border-color: #229863;
}

.btn-success:hover {
  background-color: #1c8053;
  border-color: #1c8053;
}
</style>