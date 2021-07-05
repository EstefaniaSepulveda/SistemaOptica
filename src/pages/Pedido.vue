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
    Pedido
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default{
    name: "Pedido",

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
}
</script>
<style scoped>

</style>