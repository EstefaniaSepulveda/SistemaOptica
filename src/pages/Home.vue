<template>
  <div class="home">
    <productoList></productoList>
    <productoItem></productoItem>
  </div>
</template>
<script>
import ProductoList from "./ProductoList";
import ProductoItem from "./ProductoItem";
export default {
  name: "home",
  components: { ProductoList, ProductoItem },
};
</script>
