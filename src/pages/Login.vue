<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Login</h3>
        <form @submit.prevent="submit">
          <input
            type="email"
            placeholder="Correo Electronico*"
            v-model="correo"
          />

          <input
            type="password"
            placeholder="Contraseña*"
            v-model="contrasena"
          />
          <a href="#/Registro">Registrar</a>
          <input class="button-primary" type="submit" value="Iniciar Sesión" />
        </form>
      </div>
    </div>
  </div>
</template>

<!--<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const GET_CLIENTE = qgl`
query getCliente($correo: String!, $contrasena: String!) {
  cliente(where: {correo: {_eq: $correo}, contrasena: {_eq: $contrasena}}) {
    idCliente
  }
}
`;
export default {
  name: "Login",
  data() {
    return {
      clientes: [],
      cliente: {},
    };
  },
  apollo: {
    clientes: {
      query: GET_CLIENTE,
      update: (data) => data.cristal,
    },
  },
};
</script>-->


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
html,
body {
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;
  font-family: "Roboto";
  color: #333;
}

/*cuadro de inicio de sesion*/
.divLogin .container {
  width: 100%;
  text-align: center;
}

/*bar de login*/
.divLogin .container .divcont {
  max-width: 300px;
  width: 100%;
  background: rgba(27, 76, 85, 0.6);
  padding: 30px;
  border-radius: 18px;
  display: inline-block;
  color: #fff;
}

/*linea roja de validacion de datos de inicio de sesion*/
.divLogin .container .divcont h3 {
  margin-top: 0%;
}

/*poner linea roja cuando se validan datos*/
.divLogin .container .divcont input.error {
  border-bottom: 3px solid red;
}

/*estilo cuadros inicio sesion*/
.divLogin .container .divcont input {
  margin: 0px;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
}
</style>