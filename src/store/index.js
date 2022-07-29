import Vue from 'vue'
import Vuex from 'vuex'
import todolist from './modules/todolist'
import change from './modules/change'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todolist,
    change
  },
})
