<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-table
      id="my-table"
      :items="tableData"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <p class="mt-3">Página actual: {{ currentPage }}</p>
  </div>
</template>

<script>
import { PaperTable } from "@/components";
import { mapGetters } from "vuex";
import Card from "../components/Cards/Card.vue";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import ModificarEstado from "./ModificarEstado.vue";

const GET_TRANSFERENCIA = gql`
  query get_Tansferencia {
    transferencia(
      where: { idTransferencia: { _gt: 1 } }
      order_by: { estado: desc }
    ) {
      idTransferencia
      nombre
      apellidoP
      apellidoM
      rut
      telefono
      id_armazon
      id_cristal
      totalTransferencia
      estado
    }
  }
`;
export default {
  components: { Card, PaperTable, ModificarEstado },
  name: "tabla",
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      showModal: false,
      toggleModal: false,
      transferencias: [],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("cambiarLogin", false);
      this.$store.dispatch("cambiarPerfil", "");
      this.$router.push({ path: "Home" });
    },
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
    }),
    tableData: function () {
      if (this.transferencias && this.transferencias.length) {
        return this.transferencias;
      }
      return [];
    },
    rows() {
      return this.transferencias.length;
    },
  },

  apollo: {
    transferencias: {
      query: GET_TRANSFERENCIA,
      update: (data) => data.transferencia,
    },
  },
};
</script>


<style>
</style>