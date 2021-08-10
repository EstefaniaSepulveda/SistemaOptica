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

    <div class="row">
      <card title="Pedidos">
        <div slot="raw-content" class="table-responsive">
          <paper-table
            type="hover"
            class="col-12"
            :data="tableData"
            :columns="table.columns"
          >
            <div slot-scope="{ row }">
              <td>{{ row.idTransferencia2 }}</td>
              <td>{{ row.nombre }}</td>
              <td>{{ row.apellidoP }}</td>
              <td>{{ row.apellidoM }}</td>
              <td>{{ row.rut }}</td>
              <td>{{ row.telefono }}</td>
              <td>{{ row.id_armazon }}</td>
              <td>{{ row.id_cristal }}</td>
              <td>${{ row.totalTransferencia }}</td>
              <td>
                {{ row.estado }}
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
import { mapGetters } from "vuex";
import Card from "../components/Cards/Card.vue";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import ModificarEstado from "./ModificarEstado.vue";
const tableColumns = [
  "Transferencia",
  "Nombre",
  "ApellidoP",
  "ApellidoM",
  "Rut",
  "Teléfono",
  "Armazón",
  "Cristal",
  "Tranferencia",
  "Estado",
];

const GET_TRANSFERENCIA = gql`
  query get_Tansferencia {
    transferencia(
      where: { idTransferencia2: { _gt: 1 } }
      order_by: { estado: desc }
    ) {
      idTransferencia2
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
  name: "Pedido",
  data() {
    return {
      showModal: false,
      toggleModal: false,
      transferencias: [],
      transferencia: {},
      table: {
        columns: [...tableColumns],
      },
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
  },

  apollo: {
    transferencias: {
      query: GET_TRANSFERENCIA,
      update: (data) => data.transferencia,
    },
  },
};
</script>
<style scoped>
</style>