<template>
  <div id="app">
    <particles-bg type="cobweb" :config="config" :bg="true"/>
    <div class="toDoApp">
      <h1 class="toDoAppTitle">Перелiк справ</h1>
      <AddToDoItem
          v-on:onAddItem="addItemToTheList"
          v-bind:todoList="todoList"
          v-bind:newToDoItem="newToDoItem"
          v-on:onLengthExceeded="lengthExceededMsg"
      />
      <ToDoList
          v-bind:todoList="todoList"
          v-bind:newToDo="newToDo"
          v-on:removeToDo="removeToDoItem"
        />
    </div>
    <vue-snotify/>
  </div>

</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
import AddToDoItem from '@/components/AddToDoItem.vue';
import {ParticlesBg} from 'particles-bg-vue';

export default {
  name: 'App',
  components: {
    ToDoList,
    AddToDoItem,
    ParticlesBg
  },
  data: function () {
    return {
      config: {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1],
        v: [.002, .003],
        tha: [-30, 30],
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15
      },
      todoList: [],
      newToDo: {
        type: Object
      },
      newToDoItem: ''
    }
  },
  methods: {
    addItemToTheList(todo) {
      if (!this.todoList.find((item) => item.title === todo.title)) {
        this.todoList.push(todo);
        this.$snotify.success("Успiшно додано!");
        this.newToDoItem = '';
      } else {
        this.$snotify.info("Вже додано");
      }
    },
    lengthExceededMsg() {
      this.$snotify.warning("Максимальна довжина пункту - 30 символів");
    },
    removeToDoItem(id) {
      this.todoList = this.todoList.filter(i => i.id !== id);
      this.$snotify.success("Успiшно видалено");
    }
  }
}

</script>

<style>
html, body, ul, li, form {
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: lightgray;
  color: #34353a;
}

.toDoApp {
  box-shadow: 0 10px 76px 0 rgba(0, 0, 0, 0.75);
  background-color: #bfbab7;
  padding: 25px;
  position: relative;
  margin-left: 50%;
  transform: translate(-50%, 0px);
  width: 700px;
  border-radius: 4px;
  min-height: 500px;
  margin-top: 100px;
}
.snotify-simple .snotifyToast__title,
.snotify-simple .snotifyToast__body {
  color: #000; }

.snotify-success {
  background-color: #737780 !important; }
.snotify-confirm .snotifyToast__progressBar {
  background-color: #c1c1c1 !important; }
.snotify-confirm .snotifyToast__progressBar__percentage {
  background-color: #7f7f7f !important; }
.snotify-confirm .snotifyToast__body {
  color: #737780 !important; }

.snotify-info {
  background-color: #949087; }
.snotify-warning .snotifyToast__progressBar {
  background-color: #eadfcd; }
.snotify-warning .snotifyToast__progressBar__percentage {
  background-color: #f6f1ed; }
.snotify-warning .snotifyToast__body {
  color: #fff3e0; }

.snotify-warning {
  background-color: #b3b7c3; }
.snotify-warning .snotifyToast__progressBar {
  background-color: #b6b0b0; }
.snotify-warning .snotifyToast__progressBar__percentage {
  background-color: #f6f1ed; }
.snotify-warning .snotifyToast__body {
  color: #fff3e0; }

.toDoAppTitle {
  text-align: center;
  margin: 10px 0 25px;
  color: #34353a;
}
.vue-particle-effect-button .particles-button{
  padding: 10px 25px !important;
}
/*adaptive version*/

@media (max-width: 890px) {
  .toDoApp {
    width: 500px;
  }
}

@media (max-width: 600px) {
  .toDoApp {
    width: 340px;
    min-height: 300px;
  }

  .toDoAppTitle {
    font-size: 24px;
  }
}


</style>
