<template>
  <div>
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
    <h2>Datos de Transferencia</h2>
    <p>Banco: xxxxx</p>
    <p>Tipo de Cuenta: xxxxx@xxxxx.com</p>
    <p>N° Cuenta: xxxxx</p>
    <p>Nombre: xxx</p>
    <p>Correo Electrónico: xxxxx@xxxxx.com</p>
    <p> <strong> Por favor adjuntar comprobante de pago. </strong></p>
    <imagen></imagen>
  
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Imagen from './Imagen.vue';

export default {
  components: { Imagen },
  name: "Transferencia",
  methods: {
    logout() {
      this.$store.dispatch("cambiarLogin", false);
      this.$store.dispatch("cambiarPerfil", "");
      this.$router.push({ path: "Home" });
    },
  },
  computed: {
    ...mapGetters({
      perfil: "getPerfil",
    }),
  },
};
</script>
