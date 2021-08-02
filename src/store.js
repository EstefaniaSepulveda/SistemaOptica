import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    perfil: '',
    login: false,

    carroCompraArmazon: [],
    carroCompraCristal: [],
    idCliente: '',

    precioArmazon: 0,
    precioCristal: 0,
    precioTotalCarro: 0,

  },

  getters: {
    
    getCarroCompraArmazon: state => state.carroCompraArmazon,
    getCarroCompraCristal: state => state.carroCompraCristal,

    getPrecioTotalA: function(state){
      let total = 0
      const carro = state.carroCompraArmazon
      carro.forEach(item => total += item.valor)
      state.precioArmazon = total;
      return state.precioArmazon;
    },

    getPrecioTotalC: function(state){
      let total = 0
      const carro = state.carroCompraCristal
      carro.forEach(item => total += item.valorCristal)
      state.precioCristal = total;
      return state.precioCristal;
    },

    getIdCliente: state => state.idCliente,

    getPerfil: state => state.perfil,
    getLogin: state => state.login,
  },

  mutations: {
    setAgregarArmazonCarro(state, payload) {
      state.carroCompraArmazon.push(payload);
    },

    setAgregarCristalCarro(state, payload) {
      state.carroCompraCristal.push(payload);
    },

    setPerfil(state, payload) {
      state.perfil = payload;
    },

    setLogin(state, payload) {
      state.login = payload
    },

    setPrecioTotalA(state){
      let total = 0
      const carro = state.carroCompraArmazon
      carro.forEach(item => total += item.valor)
      state.precioArmazon = total;
      return state.precioArmazon;
    },

    setPrecioTotalC (state){
      let total = 0
      const carro = state.carroCompraCristal
      carro.forEach(item => total += item.valorCristal)
      state.precioCristal = total;
      return state.precioCristal;
    },

    setIdCliente(state, payload) {
      state.idCliente = payload;
    },

    removerArmazonDelCarro(state, payload) {
      state.carroCompraArmazon = state.carroCompraArmazon.filter(armazon => {
        return armazon.idArmazon !== payload.idArmazon;
      })
    },

    removerCristalDelCarro(state, payload) {
      state.carroCompraCristal = state.carroCompraCristal.filter(cristal => {
        return cristal.idCristal !== payload.idCristal;
      })
    },

    limpiarCarro(state) {
      state.carroCompraArmazon = [];
      state.carroCompraCristal = [];
      precioArmazon = 0;
      precioCristal = 0;
     
    },
  },

  actions: {

    agregarArmazonCarro({ commit }, itemCarro) {
      commit("setAgregarArmazonCarro", itemCarro)
    },

    agregarCristalCarro({ commit }, itemCarro) {
      commit("setAgregarCristalCarro", itemCarro)
    },

    precioArmazon({commit}){
      commit("setPrecioTotalA")
    },
    precioCristal({commit}){
      commit("setPrecioTotalC")
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