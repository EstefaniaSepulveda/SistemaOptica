<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Eliminar Producto</h3>

        <form @submit.prevent="submit">
          <input type="text" placeholder="Código armazón" v-model="idArmazon" />

          <input class="button-primary" type="submit" value="Eliminar" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const DELETE_ARMAZON = gql`
  mutation delete_armazon($idArmazon: Int!) {
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
        refetchQueries: ["getArmazon"],
        update: (store, { data: { delete_armazon } }) => {
          console.log(delete_armazon);
        },
      });
      alert("Producto Eliminado");
      this.$router.push({ path: "Stock" });
    },
  },
};
</script>   

<style>
</style>