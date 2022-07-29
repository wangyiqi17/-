<template>
  <header class="header">
    <h1 :style="`color:${colors}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addList"
      v-model="listname"
    />
  </header>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions:addtodo} = createNamespacedHelpers('todolist') 
export default {
  data() {
    return {
      listname: ''
    }
  },
  methods: {
    addList() {
      // console.log(this.listname);
      this.addActionFn(this.listname)
      this.listname = ''
    },
    ...addtodo(['addActionFn'])
  },
  computed: {
    colors() {
      return this.$store.state.change.color
    }
  }
}
</script>
