<template>
  <div class="todo-list">
    <h1 class="todo-list-header">Your todos:</h1>
    <div class="todo-list-block">
      <input type="text" placeholder="Add Something" v-model="value" />
      <button class="todo-list__button add" @click="addTodo">Add ToDo</button>
    </div>
    <div class="todo-list-items" v-for="item in items" :key="item.index">
      <div class="todo-list-item">
        <div class="todo-list-item__caption" v-if="!item.isEditing">
          {{ item.value }}
        </div>
        <div v-else>
          <input
            type="text"
            placeholder="Add Something"
            v-model="item.value"
          />
        </div>
        <div class="todo-list-item-buttons">
          <button
          v-if="!item.isEditing"
            class="todo-list-item__button edit"
            @click="editTodo(item.index)"
          >
            Edit Todo
          </button>
          <button
          v-else
            class="todo-list-item__button save"
            @click="saveTodo(item.index)"
          >
            Save Todo
          </button>
          <button
            class="todo-list-item__button remove"
            @click="removeTodo(item.index)"
          >
            Remove Todo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  components: {},
  data: function () {
    return {
      items: [],
      value: null,
    };
  },
  methods: {
    addTodo() {
      if (this.value == null || this.value.match(/^ *$/) !== null) {
        return;
      } else {
        this.items.push({
          index: this.items.length,
          value: this.value,
          isEditing: false,
        });
        this.value = "";
      }

      console.log(typeof this.items);
      console.log(typeof this.value);
    },
    removeTodo(index) {
      this.items = this.items.filter((element) => element.index !== index);
    },
    saveTodo(index) {
        let tempValue =  this.items[index].value;
      this.items[index].value = tempValue
      this.items[index].isEditing = !this.items[index].isEditing;
    },
    editTodo(index) {
      console.log(index);
    //   console.log(this.items[index]);
      this.items[index].isEditing = !this.items[index].isEditing;
    },
  },
};
</script>
<style scoped>
.todo-list {
  max-width: 480px;
  background: #fff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.todo-list-block {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.todo-list-header {
  padding: 30px 0;
  text-align: center;
}
.todo-list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.todo-list-items {
    max-width: 480px;
  padding: 0 30px;
}
.todo-list-item__caption{
    /* word-break: break-all; */
    white-space: pre-line;
    /* max-width: 265px; */
    flex: 1;
}
.todo-list__button {
  outline: none;
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.todo-list-item__button {
  outline: none;
  padding: 10px 15px;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.todo-list-item-buttons{
    display: flex;
}
.add {
  background-color: lightgreen;
}
.edit {
  background-color: lightskyblue;
}
.remove {
  background-color: lightcoral;
}
.save {
  background-color: lightsalmon;
}
input {
  height: 53px;
  font-size: 18px;
  font-weight: 400;
  padding: 0 15px;
  border: 1px solid gray;
}
</style>