<template>
  <div>
    <div class="toDoListItem" v-on:dblclick="$emit('removeToDoItem', todo.id)">{{ todo.title }}
      <div v-on:click="$emit('removeToDoItem', todo.id)" class="deleteBtn">&#10005;</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object
    },
  }
}
</script>

<style scoped>
.toDoListItem {
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s;
  padding: 12px 25px;
  background-color: gainsboro;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}

.toDoListItem:hover {
  background-color: darkgrey;
}

.deleteBtn {
  display: none;
}

/*adaptive version*/

@media (max-width: 890px) {
  .deleteBtn {
    display: block;
  }
}

</style>