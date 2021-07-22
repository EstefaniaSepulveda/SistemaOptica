import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    perfil: '',
    login: false,

    armazonActual: {
      idArmazon: '',
      marca: '',
      color: '',
    },

    cristalActual: {
      idCristal: '',
    },

    carroCompra: [],
    idCliente: '',

    precioTotalCarro: 0,

  },

  getters: {
    getArmazonActual: state => state.armazonActual,
    getCristalActual: state => state.cristalActual,
    getCarroCompra: state => state.carroCompra,
    getPrecioTotalCarro: function(state) {
      let total = 0
      const carro = state.carroCompra
      carro.forEach(item => total += item.valor)
      state.precioTotalCarro = total;
      return state.precioTotalCarro;
    },
    getIdCliente: state => state.idCliente,

    getPerfil: state => state.perfil,
    getLogin: state => state.login,
  },

  mutations: {
    setAgregarItemCarro(state, payload) {
      state.carroCompra.push(payload);
    },

    setPerfil(state, payload) {
      state.perfil = payload;
    },

    setLogin(state, payload) {
      state.login = payload
    },

     setPrecioTotalCarro(state) {
      let total = 0
      const carro = state.carroCompra
      carro.forEach(item => total += item.valor)
      state.precioTotalCarro = total;
    },

    setIdCliente(state, payload) {
      state.idCliente = payload;
    },

    setArmazonActual(state, payload) {
      state.armazonActual.idArmazon = payload.idArmazon;
      state.armazonActual.marca = payload.marca;
      state.armazonActual.color = payload.color;
      let armazonCarro = state.carroCompra.find(armazon => {
        return armazon.idArmazon === payload.idArmazon
      })
      if (armazonCarro) {
        state.carroCompra.push(payload);
      }
    },

    setCristalActual(state, payload) {
      state.cristalActual.idCristal = payload.idCristal;
      let cristalCarro = state.carroCompra.find(cristal => {
        return cristal.idCristal === payload.idCristal
      })
      if (cristalCarro) {
        state.carroCompra.push(payload);
      }
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
      precioTotalCarro = 0;
    },
  },

  actions: {

    agregarItemCarro({ commit }, itemCarro) {
      commit("setAgregarItemCarro", itemCarro)
    },

     precioTotalCarro({ commit }) {
      commit("setPrecioTotalCarro")
    },

    removerArmazonDelCarro(state, payload) {
      state.commit("removerArmazonDelCarro", payload);
    },

    removerCristalDelCarro(state, payload) {
      state.commit("removerCristalDelCarro", payload);
    },

    limpiarCarro(state) {
      state.commit("limpiarCarro");
    },

    cambiarPerfil({ commit }, perfil) {
      commit('setPerfil', perfil);
    },

    cambiarLogin({ commit }, login) {
      commit('setLogin', login);
    },
  },



})