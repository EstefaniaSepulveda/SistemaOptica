<template>
  <div>

    <div class="row">
      <stats-card class="col">
        <div class="text-center" slot="content">
          <p>{{ cristal.nombreCristal }}</p>
        </div>
      </stats-card>
    </div>

    <div class="list-of-productos">
      <producto-item
        v-for="cristal in cristales"
        :key="cristal.idCristal"
        :cristal="cristal"
        class="cristales"
      ></producto-item>
    </div>
  </div>
</template>

<script>
import { StatsCard } from "@/components";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import ProductoItem from "./ProductoItem";


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
  name: "Cristales",
  components: { StatsCard, ProductoItem },

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
}
</style>