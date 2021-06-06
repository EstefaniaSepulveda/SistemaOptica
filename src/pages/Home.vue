<template>
  <div class="home">
    <producto-list />
  </div>
</template>
<script>
import ProductoList from "./ProductoList";
export default {
  name: "home",
  components: ProductoList,
};
</script>
