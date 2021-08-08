<template>
    <div id="todo-list">
        <div v-for="todo in this.todos" :key="todo.id">
              <Todo :todo="todo" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from '@/components/Todo.vue';
import { Getter } from 'vuex-class';

@Component({
  components: {
    Todo,
  },
})
export default class TodoList extends Vue {
    todos: any
    @Getter('todos') getTodos: any

    created() {
        this.todos = this.getTodos
    }
}
</script>

<style scoped>
#todo-list{
    margin-top: 4%;
}
</style>
