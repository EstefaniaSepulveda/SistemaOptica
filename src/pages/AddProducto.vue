<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Nuevo Producto</h3>

        <form @submit.prevent="submit" method="post">
          <input type="file" @change="processFile($event)" />
          <button type="submit">Aceptar</button>
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
                  class="radio3"
                  type="radio"
                  id="3"
                  value="3"
                  name="Marca"
                  v-model="id_Marca"
                />
                <label for="3">Vogue</label>
              </b-col>
            </b-row>
          </b-container>

          <input class="button-primary" type="submit" value="Agregar" />
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
        imagen: ""
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
      imagen2: "",
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dspficfpm/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "gkpqnet5",
      imagen: [],
    };
  },
  apollo: {},
  methods: {
    processFile(event) {
      this.imagen = event.target.files[0];
      console.log(this.imagen);
    },

    submit() {
      let formData = new FormData();
      formData.append("file", this.imagen); // le damos los datos de la imagen luego que se lleno en la funcion processFile()
      formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET); // le damos nuestro preset

      //subiendo imagen con fetch
      fetch(this.CLOUDINARY_URL, { method: "POST", body: formData })
        .then((response) => response.json()) //convertimos la respuesta en json
        .then((data) => console.log(data.url)) // obtenemos la url de la imagen guardada
        .catch((error) => console.log("ocurrio un error ", error)); //capturamos un posible error
      
      const { valor, color, material, id_Marca, stock} = this.$data;
      this.$apollo.mutate({
        mutation: ADD_PRODUCTO,
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
      (this.valor = ""),
        (this.color = ""),
        (this.material = ""),
        (this.id_Marca = ""),
        (this.stock = "");
      alert("Producto Agregado");
    },
  },
};
</script>

<style>
</style>