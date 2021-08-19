<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col>
          <div>
            <b-button
              v-b-modal.modal-10
              v-if="perfil === 'admin'"
              @click="showModal = !showModal"
              >Estado</b-button
            >

            <b-modal size="lg" id="modal-10">
              <modificar-estado></modificar-estado>
            </b-modal>
          </div>
        </b-col>
        <b-col
          ><b-button
            style="
              background-color: transparent;
              border-color: black;
              color: black;
            "
            v-if="perfil === 'cliente' || perfil === 'admin'"
            @click="logout()"
            name="Log out"
            >Cerrar Sesión</b-button
          ></b-col
        >
      </b-row>
    </b-container>
    <card class="content">
      <div class="card-body" style="font-size: small">
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
      </div>
    </card>
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
      refetchQueries: ["get_Tansferencia"],
      update: (data) => data.transferencia,
    },
  },
};
</script>


<style scoped>
</style>
