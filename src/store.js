import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentArmazon: {
      idArmazon: '',
      marca: '',
      color: '',
    },

    currentCristal: {
      idCristal: '',
    },

    carroCompra: [],
    idCliente: ''
  },
  getters: {
    getCurrentProducto: state => state.currentArmazon,
    getCurrentCristal: state => state.currentCristal,
    getcarroCompra: state => state.carroCompra,
    getprecioTotalCarro: state => state.precioTotalCarro,
    getIdCliente: state => state.idCliente
  },

  setIdClient(state, payload) {
    state.idCliente = payload;
  },

  setCurrentArmazon(state, payload) {
    state.currentArmazon.idArmazon = payload.idArmazon;
    state.currentArmazon.marca = payload.marca;
    state.currentArmazon.color = payload.color;

    let armazonCarro = state.carroCompra.find(armazon => {
      return armazon.idArmazon === payload.idArmazon
    })
    state.carroCompra.push(payload);
  },

  setCurrentCristal(state, payload) {
    state.currentCristal.idCristal = payload.idCristal;

    let cristalCarro = state.carroCompra.find(cristal => {
      return cristal.idCristal === payload.idCristal
    })
    state.carroCompra.push(payload);
  },

  removerArmazonDelCarro(state, payload) {
    state.carroCompra = state.carroCompra.filter(armazon => {
      return armazon.idArmazon !== payload.idArmazon;
    })
  },

  removerCristalDelCarro(state, payload) {
    state.carroCompra = state.carroCompra.filter(cristal => {
      return cristal.idCristal !== payload.idCristal;
    })
  },

  limpiarCarro(state) {
    state.carroCompra = [];
  },
  actions: {
   
    async removerArmazonDelCarro(state, payload) {
      state.commit("removerArmazonDelCarro", payload);
    },

    async removerCristalDelCarro(state, payload) {
      state.commit("removerCristalDelCarro", payload);
    },

    async limpiarCarro(state) {
      state.commit("limpiarCarro");
    }
  }

})