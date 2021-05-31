<template>
  <div>
    <div class="row">
      <stats-card class="col" @click="marca = '%'">
        <div class="icon-big text-center" slot="header">
          <img src="https://image.flaticon.com/icons/png/512/58/58477.png" />
        </div>

        <div class="icon-big text-center" slot="content">
          <a class="nav-link active">Todas</a>
        </div>
      </stats-card>

      <stats-card class="col" @click="marca = 'ray-ban%'">
        <div class="icon-big text-center" slot="header">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/03/Ray-Ban-logo-tumb.jpg"
          />
        </div>

        <div class="icon-big text-center" slot="content">
          <a class="nav-link active">Vogue</a>
        </div>
      </stats-card>

      <stats-card class="col" @click="marca = 'vogue%'">
        <div class="icon-big text-center" slot="header">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/03/Ray-Ban-logo-tumb.jpg"
          />
        </div>

        <div class="icon-big text-center" slot="content">
          <a class="nav-link active">Vogue</a>
        </div>
      </stats-card>

      <stats-card class="col" @click="marca = 'oakley%'">
        <div class="icon-big text-center" slot="header">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/03/Ray-Ban-logo-tumb.jpg"
          />
        </div>

        <div class="icon-big text-center" slot="content">
          <a class="nav-link active">Oakley</a>
        </div>
      </stats-card>
    </div>

    <div class="list-of-productos">
      <producto-item
        v-for="armazon in armazones"
        :key="armazon.idArmazon"
        :armazon="armazon"
        class="producto-item"
      ></producto-item>
    </div>
  </div>
</template>

<script>
import { Card, StatsCard } from "@/components";

import ProductoItem from "./ProductoItem";

import gql from "graphql-tag";
const GET_ARMAZON = gql`
  query getArmazon($marca: String!) {
    armazon(where: { marca: { nombreMarca: { _ilike: $marca } } }) {
      idArmazon
      valor
      color
      material
      stock
      marca {
        nombreMarca
      }
      imagen
    }
  }
`;
export default {
  name: "ProductoList",
  components: { ProductoItem, Card, StatsCard },

  data() {
    return {
      armazones: [],
      marca: "%",
    };
  },

  apollo: {
    armazones: {
      query: GET_ARMAZON,
      variables() {
        return {
          marca: this.marca,
        };
      },
      update: (data) => data.armazon,
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
