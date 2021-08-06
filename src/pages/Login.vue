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
          <a href="#/Registro">¿No tiene Cuenta?, Regístrate</a>
          <br />
          <button @click.prevent="login()">Aceptar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import gql from "graphql-tag";
import { mapActions } from "vuex";
const GET_CLIENTE = gql`
query getCliente($correo: String!, $contrasena: String!) {
  cliente(where: {correo: {_eq: $correo}, contrasena: {_eq: $contrasena}}) {
    contrasena
    correo
    idCliente
  }
}
`;
export default {
  name: "Login",
  data() {
    return {
      contrasena: "",
      correo:""
    };
  },
  apollo: {},

  methods: {
    ...mapActions(["cambiarLogin", "cambiarPerfil"]),

    login() {
      const { contrasena, correo, idCliente } = this.$data;
      this.$apollo.query({
        query: GET_CLIENTE,
        variables: {
          contrasena,
          correo,
          idCliente,
        },
        update: (data) => data.cliente,
      });
      console.log(correo, this.correo, idCliente);
      if (this.correo == "" || this.contrasena == "") {
        alert("Campos Vacios");
      } else {
        if (correo == "admin@administrador.cl" && contrasena == "pass") {
          this.$store.dispatch("cambiarLogin", true);
          this.$store.dispatch("cambiarPerfil", "admin");
          router.push({ path: "Stock" });
        } else {
          if (correo == this.correo && contrasena == this.contrasena) {
            this.$store.dispatch("cambiarLogin", true);
            this.$store.dispatch("cambiarPerfil", "cliente");
            router.push({ path: "ProductoList" });
          }
        }
      }
    },
  },
};
</script>


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
a:hover,
a:focus {
  color: #fff;
}
</style>