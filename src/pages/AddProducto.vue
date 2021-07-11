<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Nuevo Producto</h3>
        <form @submit.prevent="submit">
          <input type="text" placeholder="Valor" v-model="valor" />
          <input type="text" placeholder="Color" v-model="color" />
          <input type="text" placeholder="Material" v-model="material" />
          <input type="text" placeholder="Stock" v-model="stock" />

          <input
            type="radio"
            id="1"
            value="1"
            name="Marca"
            v-model="id_Marca"
          />
          <label for="1">Ray-Ban</label>

          <input
            type="radio"
            id="2"
            value="2"
            name="Marca"
            v-model="id_Marca"
          />
          <label for="2">Oakley</label>

          <input
            type="radio"
            id="3"
            value="3"
            name="Marca"
            v-model="id_Marca"
          />
          <label for="3">Vogue</label>
          <input class="button-primary" type="submit" value="Agregar"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const ADD_PRODUCTO = gql`
  mutation addProducto(
    $valor: Int!
    $color: String!
    $material: String!
    $id_Marca: Int!
    $stock: Int!
  ) {
    insert_armazon(
      objects: {
        color: $color
        id_Marca: $id_Marca
        material: $material
        stock: $stock
        valor: $valor
        id_transferencia: 0
        imagen: "http://www.otece.com.ec/wp-content/uploads/2019/07/sin-imagen.jpg"
      }
    ) {
      returning {
        idArmazon
      }
    }
  }
`;
export default {
  name: "AddProducto",
  data() {
    return {
      valor: "",
      color: "",
      material: "",
      id_Marca: "",
      stock: "",
    };
  },
  apollo: {},
  methods: {
    submit() {
      const { valor, color, material, id_Marca, stock } = this.$data;
      this.$apollo.mutate({
        mutation:ADD_PRODUCTO,
        variables: {
          valor,
          color,
          material,
          id_Marca,
          stock,
        },
        refetchQueries: ["getArmazon"],
        update: (cache, { data: { insert_armazon } }) => {
          console.log(insert_armazon);
        },
        
      });
      this.valor = "",
       this.color = "",
       this.material = "",
       this.id_Marca = "",
       this.stock = "";
       alert("Producto Agregado");
    },
  },
};
</script>

<style>
</style>