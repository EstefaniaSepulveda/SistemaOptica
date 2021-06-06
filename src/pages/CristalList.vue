<template>
  <div class="list-of-productos">
    <cristal-item
      v-for="armazon in armazones"
      :key="armazon.idArmazon"
      :armazon="armazon"
      class="cristal-item"
    ></cristal-item>
  </div>
</template>

<script>
import { Card, StatsCard } from "@/components";

import CristalItem from "./CristalItem";

import gql from "graphql-tag";
const GET_CRISTAL = gql`
  query getCristal {
    cristal {
      descripcion
      nombreCristal
    }
  }
`;
export default {
  name: "CristalItem",
  components: { CristalItem, Card, StatsCard },

  data() {
    return {
      cristales: [],
    };
  },

  apollo: {
    armazones: {
      query: GET_CRISTAL,
      variables() {
        return {
          cristal: this.cristales,
        };
      },
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
.card img {
  width: 82px;
}
</style>