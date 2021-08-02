<template>
  <div>
    <div class="list-of-cristales">
      <cristales-item
        v-for="cristal in cristales"
        :key="cristal.idCristal"
        :cristal="cristal"
        class="cristal-item"
      ></cristales-item>
    </div>
  </div>
</template>


<script>
import { Card, StatsCard } from "@/components";

import CristalesItem from "./CristalesItem.vue";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

const GET_CRISTAL = gql`
  query getCristales {
    cristal(order_by: { idCristal: asc }) {
      nombreCristal
      descripcion
      valorCristal
      idCristal
    }
  }
`;

export default {
  components: { CristalesItem, Card },
  name: "Cristales",

  data() {
    return {
      cristales: [],
    };
  },
  
  apollo: {
    cristales: {
      query: GET_CRISTAL,
      update: (data) => data.cristal,
    },
  },
};
</script>

<style>
.card-body {
  font-size: 7px;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
}
</style>

<style scoped>
.btn-success {
  background-color: #229863;
  border-color: #229863;
}

.btn-success:hover {
  background-color: #1c8053;
  border-color: #1c8053;
}
</style>