<template>
  <div class="inicio">
      
    <producto-list />
    
  </div>
</template>
<script>
import ProductoList from "../components/ProductoList.vue";

export default {
  name: "inicio",
  ProductoList,
};
</script>
