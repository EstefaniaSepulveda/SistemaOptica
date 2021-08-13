<template>
  <div class="divLogin">
    <b-container class="bv-example-row">
      <b-row>
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col />
        <b-col
          ><b-button
            style="
              background-color: transparent;
              border-color: black;
              color: black;
            "
            v-if="perfil === 'cliente' || perfil === 'admin'"
            @click="logout()"
            name="Log out"
            >Cerrar Sesión</b-button
          ></b-col
        >
      </b-row>
    </b-container>

   <div class="container">
      <div class="divcont">
        <h3>Datos Receta Médica</h3>
        <form @submit.prevent="submit">
          <input
            type="text"
            label="Esfera ojo derecho"
            placeholder="Esfera ojo derecho"
            v-model="esferaOD"
          />

          <input
            type="text"
            placeholder="Esfera ojo Izquierdo"
            v-model="esferaOI"
          />
          <input
            type="text"
            placeholder="Cilindro ojo derecho"
            v-model="cilindroOD"
          />
          <input
            type="text"
            placeholder="Cilindro ojo izquierdo"
            v-model="cilindroOI"
          />
          <input type="text" placeholder="Eje ojo derecho" v-model="ejeOD" />
          <input type="text" placeholder="Eje ojo izquierdo" v-model="ejeOI" />
          <input
            type="text"
            placeholder="Adición ojo derecho"
            v-model="adicionOD"
          />
          <input
            type="text"
            placeholder="Adición ojo izquierdo"
            v-model="adicionOI"
          />
          <input
            type="text"
            placeholder="Distancia pupilar ojo derecho"
            v-model="distanciaPupilarOD"
          />
          <input
            type="text"
            placeholder="Distancia pupilar ojo izquierdo"
            v-model="distanciaPupilarOI"
          />
          <input
            type="text"
            placeholder="Nombre oftalmólogo"
            v-model="nombreOftalmologo"
          />
          <input
            type="text"
            placeholder="Observaciones"
            v-model="observaciones"
          />
          <input type="date" placeholder="Fecha Receta" v-model="fechaReceta" />
          <p> Por favor adjuntar receta médica </p>
          <imagen></imagen>

          <input class="button-primary" type="submit" value="Aceptar" />
        </form>
        
      </div>
    </div>
  </div>
</template>


<script>
import Imagen from "./Imagen";
import { mapGetters } from "vuex";
import router from "../router";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

const ADD_RECETA = gql`
  mutation addReceta(
    $observaciones: String!
    $esferaOD: String!
    $esferaOI: String!
    $cilindroOD: String!
    $cilindroOI: String!
    $ejeOD: String!
    $ejeOI: String!
    $adicionOD: String!
    $adicionOI: String!
    $distanciaPupilarOD: String!
    $distanciaPupilarOI: String!
    $nombreOftalmologo: String!
    $fechaReceta: date!
  ) {
    insert_receta(
      objects: {
        adicionOD: $adicionOD
        adicionOI: $adicionOI
        cilindroOD: $cilindroOD
        cilindroOI: $cilindroOI
        distanciaPupilarOD: $distanciaPupilarOD
        distanciaPupilarOI: $distanciaPupilarOI
        ejeOD: $ejeOD
        ejeOI: $ejeOI
        esferaOD: $esferaOD
        esferaOI: $esferaOI
        fechaReceta: $fechaReceta
        nombreOftalmologo: $nombreOftalmologo
        observaciones: $observaciones
      }
    ) {
      returning {
        idReceta
      }
    }
  }
`;
export default {
  components: { Imagen },
  name: "Receta",
  data() {
    return {
      adicionOD: "",
      adicionOI: "",
      cilindroOD: "",
      cilindroOI: "",
      distanciaPupilarOD: "",
      distanciaPupilarOI: "",
      ejeOD: "",
      ejeOI: "",
      esferaOD: "",
      esferaOI: "",
      fechaReceta: "",
      nombreOftalmologo: "",
      observaciones: "",
    };
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
    }),
  },
  apollo: {},
  methods: {
    logout() {
      this.$store.dispatch("cambiarLogin", false);
      this.$store.dispatch("cambiarPerfil", "");
      this.$router.push({ path: "Home" });
    },
    submit() {
      const {
        adicionOD,
        adicionOI,
        cilindroOD,
        cilindroOI,
        distanciaPupilarOD,
        distanciaPupilarOI,
        ejeOD,
        ejeOI,
        esferaOD,
        esferaOI,
        fechaReceta,
        nombreOftalmologo,
        observaciones,
      } = this.$data;
      this.$apollo.mutate({
        mutation: ADD_RECETA,
        variables: {
          adicionOD,
          adicionOI,
          cilindroOD,
          cilindroOI,
          distanciaPupilarOD,
          distanciaPupilarOI,
          ejeOD,
          ejeOI,
          esferaOD,
          esferaOI,
          fechaReceta,
          nombreOftalmologo,
          observaciones,
        },
        update: (cache, { data: { insert_receta } }) => {
          console.log(insert_receta);
        },
      });
      alert("Receta Actualizada");
      router.push({ name: "Transferencia" });
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
  max-width: 450px;
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
  border-radius: 15px;
  width: 50%;
  margin-bottom: 15px;
}
a:hover,
a:focus {
  color: #fff;
}
</style>
