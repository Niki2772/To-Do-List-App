<template>
  <div>
    <form v-on:submit.prevent="onAddItem" class="inputWrap">
      <input type="text" v-model="newToDoItem" class="toDoInput" placeholder="Що треба зробити?">
      <button type="submit" class="customBtnWrap">
        <AddButton v-bind:newToDoItem="newToDoItem"/>
      </button>
    </form>
  </div>
</template>

<script>

import AddButton from "@/components/AddButton";

export default {
  name: 'AddToDoItem',
  components: {
    AddButton
  },
  props: [
    'todoList',
    'newToDoItem'
  ],
  methods: {
    onAddItem() {
      if (this.newToDoItem.length > 0 && this.newToDoItem.length <= 30) {
        const newToDo = {
          id: Date.now(),
          title: this.newToDoItem
        }
        this.$emit('onAddItem', newToDo);
      }
      if (this.newToDoItem.length > 30) {
        this.$emit('onLengthExceeded')
      }
    }
  }
}
</script>

<style scoped>
.inputWrap {
  display: flex;
  height: 37px;
}

.toDoInput {
  border-radius: 4px;
  margin-right: 10px;
  color: #34353a;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 25px;
  outline: none;
  border: none;
}

.customBtnWrap {
  background: transparent;
  border: none;
  outline: none;
  z-index: 1;
  display: flex;
  padding: 0;
}

/*adaptive version*/

@media (max-width: 600px) {
  .inputWrap {
    height: auto;
    width: 100%;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .toDoInput {
    margin-bottom: 10px;
    margin-right: 0;
  }

  .customBtnWrap {
    width: 100%;
    cursor: pointer;
  }
}
</style>