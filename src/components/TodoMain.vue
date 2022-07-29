<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.done}"  v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState:todoarr} = createNamespacedHelpers('todolist') 
export default {
  
computed: {
  ...todoarr(['list'])
},
methods: {
  del(id) {
    const index = this.list.findIndex((item) => {
      return item.id === id
    })
    this.$store.dispatch('todolist/deleteActionFn', index)
  }
}
}
</script>
