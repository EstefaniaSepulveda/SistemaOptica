<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Nuevo Producto</h3>

        <form @submit.prevent="submit" method="post">
          <p> Por favor adjuntar imagen </p>
          <imagen @URL="recibirURL"></imagen>
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

          <input class="button-primary" type="submit" value="Agregar"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import Imagen from './Imagen.vue';
const ADD_PRODUCTO = gql`
  mutation addProducto(
    $valor: Int!
    $color: String!
    $material: String!
    $id_Marca: Int!
    $stock: Int!
    $imagen: String!
  ) {
    insert_armazon(
      objects: {
        color: $color
        id_Marca: $id_Marca
        material: $material
        stock: $stock
        valor: $valor
        id_transferencia: 0
        imagen: $imagen
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
  components: { Imagen },
  data() {
    return {
      valor: "",
      color: "",
      material: "",
      id_Marca: "",
      stock: "",
      imagen: "",
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dspficfpm/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "gkpqnet5",
    };
  },
  apollo: {},
  methods: {
   recibirURL(URL){
     this.imagen = URL;
     console.log("esta es la url", URL)
   },
    submit() {
      const { valor, color, material, id_Marca, stock, imagen} = this.$data;
      this.$apollo.mutate({
        mutation: ADD_PRODUCTO,
        variables: {
          valor,
          color,
          material,
          id_Marca,
          stock,
          imagen
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
      this.stock = "",
      this.imagen = "",
      
      alert("Producto Agregado");
      
    },
  },
};
</script>

<style>
.divLogin .container .divcont {
    max-width: 100%;
}
</style>