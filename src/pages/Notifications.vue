
<template>
  <div class="submit-form">
    <form @submit.prevent="submit">
      <fieldset>
        <input type="text" placeholder="Nombre" v-model="nombre">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="Apellido Paterno" v-model="apellido_paterno">
        <input type="text" placeholder="Apellido Materno" v-model="apellido_materno">
        <input type="text" placeholder="telefono celular" v-model="telefono_celular">
        <input type="text" placeholder="telefono fijo" v-model="telefono_fijo">
        <input type="text" placeholder="direccion" v-model="direccion">
      </fieldset>
      <input class="button-primary" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const ADD_CLIENTE = gql`
  mutation addCliente(
    $nombre: String!
    $email: String!
    $apellido_paterno: String!
    $apellido_materno: String!
    $telefono_celular: String!
    $telefono_fijo: String!
    $direccion: String!
  ) {
    insert_cliente(
      objects: [
        {
          nombre: $nombre
          email: $email
          apellido_paterno: $apellido_paterno
          apellido_materno: $apellido_materno
          telefono_celular: $telefono_celular
          telefono_fijo: $telefono_fijo
          direccion: $direccion
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`;
export default {
  name: "AddCliente",
  data() {
    return {
        nombre: "",
        email: "",
        apellido_paterno: "",
        apellido_materno: "",
        telefono_celular: "",
        telefono_fijo: "",
        direccion: ""
    };
  },
  apollo: {},
  methods: {
    submit() {
      const { nombre, email, apellido_paterno, apellido_materno, telefono_celular, telefono_fijo, direccion } = this.$data;
      this.$apollo.mutate({
        mutation: ADD_CLIENTE,
        variables: {
          nombre,
          email,
          apellido_paterno,
          apellido_materno,
          telefono_celular,
          telefono_fijo,
          direccion
        },
        refetchQueries: ["getClientes"]
      });
      this.cliente = "";
      this.email = "";
      this.apellido_paterno = "";
      this.apellido_materno = "";
      this.telefono_celular = "";
      this.telefono_fijo = "";
      this.direccion = "";
       alert("Cliente creado");
    }
  }
};
</script>
<style>
form {
  width: 50%;
}
.submit-form {
  display: flex;
  justify-content: center;
}
</style>
