<template>
  <div>
    <div class="row">
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-brand class="text-white">Marcas</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <a class="nav-link active" @click="marca = '%'">Todas</a>
            <a class="nav-link" @click="marca = 'ray-ban%'">Ray-Ban</a>
            <a class="nav-link" @click="marca = 'vogue%'">Vogue</a>
            <a class="nav-link" @click="marca = 'oakley%'">Oakley</a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
