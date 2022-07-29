export default {
  namespaced: true,
  state:{
    list:[
      {
          name: '吃饭',
          done: false,
          id: 1,
      },
      {
          name: '睡觉',
          done: true,
          id: 2,
      },
      {
          name: '打豆豆',
          done: false,
          id: 3,
      },
    ]
  },
  mutations:{
    deleteFn(state, payload) {
      state.list.splice(payload, 1)
    },
    addFn(state,payload) {
      state.list.unshift({
        id:state.list.length + 1,
        name:payload,
        done:false
      })
    }
  },
  actions:{
    deleteActionFn(context,payload) {
      context.commit("deleteFn", payload)
    },
    addActionFn(context,payload) {
      context.commit("addFn", payload)
    }
  },
  getters:{},
}