<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
export default {
  name:"AboutView",
  components:{
    TodoList
  }
}
</script>
