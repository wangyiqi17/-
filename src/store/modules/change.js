export default {
  namespaced: true,
      state:{
        color:JSON.parse(localStorage.getItem('color')) || 'black',
        colorList:['red','orange','yellow','green','blue','purple']
      },
      mutations:{
        changeFn(state, index) {
          const color = state.colorList[index]
          state.color = color
          localStorage.setItem('color', JSON.stringify(color))
        }
      },
      actions:{
        changeActionFn(context,index) {
          context.commit("changeFn", index)
        }
      },
      getters:{},
    }