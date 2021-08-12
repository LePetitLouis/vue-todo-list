<template>
    <div id="todo-list">
        <a @click="removeAllTodos()" v-if="todos">Tout supprimer</a>
        <div v-for="todo in this.todos" :key="todo.id">
              <Todo :todo="todo" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from '@/components/Todo.vue';
import { Getter, Action } from 'vuex-class';

@Component({
  components: {
    Todo,
  },
})
export default class TodoList extends Vue {
    @Getter('todos') getTodos: any
    @Action('deleteAllTodos') deleteAllTodos: any

    get todos() {
        return this.getTodos
    }

    removeAllTodos() {
        this.deleteAllTodos()
    }

}
</script>

<style scoped>
#todo-list{
    margin-top: 4%;
}
</style>
