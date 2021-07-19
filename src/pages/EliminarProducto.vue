<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Actualizar Producto</h3>

        <form @submit.prevent="submit">
          <input type="text" placeholder="Id Armazón" v-model="idArmazon" />

          <input class="button-primary" type="submit" value="Actualizar" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const DELETE_ARMAZON = gql`
  mutation deleteArmazon($idArmazon: Int!) {
    delete_armazon(where: { idArmazon: { _eq: $idArmazon } }) {
      affected_rows
    }
  }
`;
export default {
  name: "EliminarProducto",

  methods: {
    submit() {
        this.$apollo.mutate({
        mutation: DELETE_ARMAZON,
        variables: {
          idArmazon: this.idArmazon,
        },
        update: (store, { data: { deleteArmazon } }) => {
          if (deleteArmazon.affected_rows) {
            console.log(deleteArmazon);
          }
        },
      });
    },
  },
};
</script>

<style>
</style>