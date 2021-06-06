<template>
  <div class="inicio">
      
    <producto-list></producto-list>
    
  </div>
</template>
<script>

import ProductoList from './ProductoList.vue';

export default {
  components: { ProductoList },
  name: "inicio",
  ProductoList,
    ProductoItem
};
</script>
