<template>
  <div id="todo">
      <div v-if="showUpdate" class="section-update">
          <input type="text" v-model="todo.description" ref="description" @keyup.enter="editTodo(todo)">
      </div>
      <h2 v-else>{{todo.description}}</h2>

      <div class="section-icon">
        <font-awesome-icon icon="times" class="icon-cancel" @click="handleShow" v-if="showUpdate" />
        <font-awesome-icon icon="edit" class="icon-update" @click="handleShow" v-else />
        <font-awesome-icon icon="trash" @click="deleteTodo(todo.id)" class="icon-delete" />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Todo extends Vue {
    showUpdate: boolean = false

    @Prop() todo: any
    @Prop() removeTodo: any
    @Action('updateTodo') updateTodo: any

    deleteTodo(id: string){
        this.$emit('removeTodo', id)
    }

    editTodo(todo: any){
        this.updateTodo(todo)
        this.showUpdate = false
    }

    handleShow() {
        this.showUpdate = this.showUpdate ? false : true
    }

}
</script>

<style scoped>
#todo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 70px;
    border: 1px solid black;
    padding: 0 1%;
    margin: auto;
    border-radius: 2px;
}

#todo h2, #todo .section-update{
    width: 70%;
    text-align: start;
    margin-left: 4%;
}

#todo .section-icon{
    width: 30%;
    text-align: end;
    margin-right: 6%;
}

.icon-delete{
    color: red;
    cursor: pointer;
    font-size: 1.5rem;
}

.icon-update, .icon-cancel{
    color: blue;
    cursor: pointer;
    margin: 0 15%;
    font-size: 1.5rem;
}

.icon-cancel{
    color: black;
}
</style>
