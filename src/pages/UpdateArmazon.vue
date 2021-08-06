<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Actualizar Producto</h3>

        <form @submit.prevent="submit">
          <input type="text" placeholder="Código Armazón" v-model="idArmazon" />
          <!--<b-button variant="secondary" @click="buscar()">Buscar</b-button>-->

          <input type="text" placeholder="Valor" v-model="valor" />
          <input type="text" placeholder="Color" v-model="color" />
          <input type="text" placeholder="Material" v-model="material" />
          <input type="text" placeholder="Stock" v-model="stock" />
          <b-container class="container">
            <b-row>
              <b-col>
                <input
                  type="radio"
                  id="1"
                  value="1"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="1">Ray-Ban</label>
              </b-col>
              <b-col>
                <input
                  type="radio"
                  id="2"
                  value="2"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="2">Oakley</label>
              </b-col>
              <b-col>
                <input
                  class="radio"
                  type="radio"
                  id="3"
                  value="3"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="3">Vogue</label>
              </b-col>
              <b-col>
                <input
                  class="radio"
                  type="radio"
                  id="4"
                  value="4"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="4">Ralph Lauren</label>
              </b-col>
              <b-col>
                <input
                  class="radio"
                  type="radio"
                  id="5"
                  value="5"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="5">Northweek</label>
              </b-col>
              <b-col>
                <input
                  class="radio"
                  type="radio"
                  id="6"
                  value="6"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="6"> Armani Exchange</label>
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

const UPDATE_ARMAZON = gql`
  mutation updateArmazon(
    $idArmazon: Int!
    $id_Marca: Int!
    $material: String
    $stock: Int!
    $color: String!
    $valor: Int!
  ) {
    update_armazon(
      where: { idArmazon: { _eq: $idArmazon } }
      _set: {
        color: $color
        id_Marca: $id_Marca
        material: $material
        stock: $stock
        valor: $valor
      }
    ) {
      affected_rows
    }
  }
`;
export default {
  name: "UpdateArmazon",

  data() {
    return {
      color: "",
      id_Marca: "",
      material: "",
      stock: "",
      valor: "",
    };
  },
  methods: {
    submit() {
      this.$apollo.mutate({
        mutation: UPDATE_ARMAZON,
        variables: {
          idArmazon: this.idArmazon,
          color: this.color,
          id_Marca: this.id_Marca,
          material: this.material,
          stock: this.stock,
          valor: this.valor,
        },
        refetchQueries: ["getArmazon"],
        update: (store, { data: { updateArmazon } }) => {
          if (updateArmazon.affected_rows) {
            console.log(updateArmazon);
          }
        },
      });
      alert("Producto Actualizado");
    },
  },
};
</script>