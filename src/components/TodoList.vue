<template>
    <div id="todo-list">
        <div v-for="todo in this.todos" :key="todo.id">
              <Todo :todo="todo" @removeTodo="removeTodo" />
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
    @Action('deleteTodo') deleteTodo: any

    get todos() {
        return this.getTodos
    }

    removeTodo(id: string){
        this.deleteTodo(id)
        this.todos
    }
}
</script>

<style scoped>
#todo-list{
    margin-top: 4%;
}
</style>
