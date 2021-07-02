<template>
  <div class="home">
    <productoList></productoList>
    <productoItem></productoItem>
  </div>
</template>
<script>
import ProductoList from "@/cliente/ProductoList.vue";
import ProductoItem from "@/cliente/ProductoItem.vue";
export default {
  name: "home",
  components: { ProductoList, ProductoItem },
};
</script>
