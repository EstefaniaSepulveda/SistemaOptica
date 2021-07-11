<template>
  <div>
    <producto-list></producto-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductoList from "./ProductoList.vue";
export default {
  name: "Stock",
  components: { ProductoList },
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
