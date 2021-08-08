<template>
  <div id="add-todo">
        <input type="text" v-model="description" placeholder="Ajouter une nouvelle todo..." @keyup.enter="createTodo">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class AddTodo extends Vue {
    private description: string = ""

    @Action('addTodo') addTodo: any
    @Getter('todos') getTodos: any

    createTodo() {
        this.addTodo({ description: this.description })
        this.description = ""
        this.getTodos
    }
}
</script>

<style scoped>
input{
    width: 40%;
    font-size: 1.3rem;
    padding: 15px;
}
</style>