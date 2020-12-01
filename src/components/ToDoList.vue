<template>
  <div>
    <ul>
      <ToDoItem
          v-for="todo in todoList"
          v-bind:todo="todo"
          v-bind:key="todo.id"
          v-on:removeToDoItem="removeToDo"
      />
    </ul>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
  props: [
    'todoList',
    'newToDo',
    'onInputText'
  ],
  methods: {
    removeToDo(id) {
      this.$emit('removeToDo', id)
    }
  }
}


</script>

<style scoped>
ul {
  margin: 15px 0;
}
</style>
