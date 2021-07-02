<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>Correo</label>
      <input
        type="email"
        v-model="correo"
        name="correo"
        placeholder="Ingrese su correo"
      />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

const GET_CONTRASEÑA = gql`
  query getcontrasena($correo: String!) {
    cliente(where: { correo: { _eq: "$correo" } }) {
      contrasena
      correo
    }
  }
`;
export default {
  name: "ContactUs",
  data() {
    return {
      correo: "",
    };
  },
  apollo: {
    query: GET_CONTRASEÑA,
    variables() {
      return {
        correo:this.correo,
        contrasena: this.contrasena,
      };
    },
    update: (data) => data.cliente,
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_m2ziz8r",
          "template_izxx3w5",
          e.target,
          "user_A14nuidhYY0gIYTXE1G8P",
          {
            correo: this.correo,
            contrasena: this.contrasena,
          }
        );
        console.log("it works!!!");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field

      this.correo = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #b8c7b9;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>