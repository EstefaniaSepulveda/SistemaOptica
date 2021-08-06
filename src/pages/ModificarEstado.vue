<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Actualizar Estado</h3>

        <form @submit.prevent="submit">
          <input
            type="text"
            placeholder="Código Pedido"
            v-model="idTransferencia2"
          />
          <!--<b-button variant="secondary" @click="buscar()">Buscar</b-button>-->

          <b-container class="container">
            <b-row>
              <b-col>
                <input
                  type="radio"
                  id="1"
                  value="1"
                  name="Estado"
                  v-model="estado"
                />
                <label for="1">1. Recibido</label>
              </b-col>
              <b-col>
                <input
                  type="radio"
                  id="2"
                  value="2"
                  name="Estado"
                  v-model="estado"
                />
                <label for="2">2. Armando</label>
              </b-col>
              <b-col>
                <input
                  class="radio"
                  type="radio"
                  id="3"
                  value="3"
                  name="Estado"
                  v-model="estado"
                />
                <label for="3">3. Listo</label>
              </b-col>
            </b-row>
          </b-container>

          <input class="button-primary" type="submit" value="Actualizar" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const UPDATE_ESTADO = gql`
    mutation update_transferencia(
        $idTransferencia2: Int!, 
        $estado: Int!) {
    update_transferencia(
      where: { idTransferencia2: { _eq: $idTransferencia2 } }
      _set: { estado: $estado }
    ) {
      affected_rows
    }
  }
`;
export default {
  name: "ModificarEstado",

  data() {
    return {
      estado: "",
    };
  },
  methods: {
    submit() {
      this.$apollo.mutate({
        mutation: UPDATE_ESTADO,
        variables: {
          idTransferencia: this.idTransferencia,
          estado: this.estado,
        },
        refetchQueries: ["get_Tansferencia"],
        update: (store, { data: { update_transferencia } }) => {
          if (update_transferencia.affected_rows) {
            console.log(update_transferencia);
          }
        },
      });
      alert("Producto Actualizado");
    },
  },
};
</script>

<style>
</style>