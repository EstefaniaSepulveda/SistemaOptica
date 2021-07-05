<template>
  <div class="divLogin">
    <div class="container">
      <div class="divcont">
        <h3>Registro</h3>
        <form @submit.prevent="submit">
          <input type="text" placeholder="Nombre *" v-model="nombre" />

          <input
            type="text"
            placeholder="Apellido Paterno *"
            v-model="apellidoP"
          />
          <input
            type="text"
            placeholder="Apellido Materno *"
            v-model="apellidoM"
          />
          <input type="text" placeholder="Run *" v-model="run" />
          <input
            type="email"
            :class="{ error: validarCorreo }"
            placeholder="Correo Electronico *"
            v-model="correo"
          />
          <input type="text" placeholder="912345678 *" v-model="telefono" />
          <input
            type="password"
            placeholder="Contraseña*"
            v-model="contrasena"
          />
          <a href="#/Login">Iniciar Sesión</a>
          <input class="button-primary" type="submit" value="Aceptar"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
const ADD_CLIENTE = gql`
  mutation addCliente(
    $nombre: String!
    $run: String!
    $apellidoP: String!
    $apellidoM: String!
    $correo: String!
    $telefono: Int!
    $contrasena: String!
  ) {
    insert_cliente(
      objects: [
        {
          nombre: $nombre
          run: $run
          apellidoP: $apellidoP
          apellidoM: $apellidoM
          correo: $correo
          contrasena: $contrasena
          telefono: $telefono
        }
      ]
    ) {
      returning {
        idCliente
      }
    }
  }
`;
export default {
  name: "Registro",
  data() {
    return {
      nombre: "",
      run: "",
      apellidoP: "",
      apellidoM: "",
      correo: "",
      contrasena: "",
      telefono: "",
    };
  },
  apollo: {},
  methods: {
    submit() {
      const {
        nombre,
        run,
        apellidoP,
        apellidoM,
        correo,
        contrasena,
        telefono,
      } = this.$data;
      this.$apollo.mutate({
        mutation: ADD_CLIENTE,
        variables: {
          nombre,
          run,
          apellidoP,
          apellidoM,
          correo,
          contrasena,
          telefono,
        },
        update: (cache, { data: { insert_cliente } }) => {
          console.log(insert_cliente);
        },
      });
      if (
        this.nombre != "" &&
        this.run != "" &&
        this.apellidoP != " " &&
        this.apellidoM != "" &&
        this.correo != "" &&
        this.contrasena != "" &&
        this.telefono != ""
      ) {
        alert("Cliente Creado");
        this.nombre = "";
        this.run = "";
        this.apellidoP = "";
        this.apellidoM = "";
        this.correo = "";
        this.contrasena = "";
        this.telefono = "";
        router.push({ name: "Login" });
      } else {
        alert("Todos los campos deben estar llenados");
      }
    },

  },
  computed: {
    validarCorreo() {
      var exp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (exp.test(this.correo)) {
        return false;
      } else {
        return true;
      }
    },
    
  },
};
</script>

<style>
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
a:hover, a:focus {
    color: #fff;
   
}
</style>