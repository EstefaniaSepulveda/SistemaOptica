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
            >Log out</b-button
          ></b-col
        >
      </b-row>
    </b-container>
    <h2>Datos de Transferencia</h2>
    <p>Banco: xxxxx</p>
    <p>N° Cuenta: xxxxx</p>
    <p>Nombre: xxx</p>
    <p>Correo Electronico: xxxxx@xxxxx.com</p>
    <h2>Receta Médica</h2>
    <p>
      Por favor adjuntar el comprobante de pago y una foto de la receta médica
      para su verificación y enviar los siguientes datos:
    </p>
    <p>Rut:</p>
    <p>Nombre completo:</p>
    <p>Numero de telefono:</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
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
