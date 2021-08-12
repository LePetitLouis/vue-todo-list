import Todo from '@/models/todo'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      description: 'Test 1',
      done: false
    }]
  },

  mutations: {
    ADD_TODO: (state, todo: Todo) => {
      const index = state.todos.length
      state.todos.push({
        ...todo,
        done: false,
        id: index
      })
    },

    DELETE_TODO: (state, id: number) => {
      state.todos = state.todos.filter(el => el.id !== id)
    }, 

    UPDATE_TODO: (state, todo: Todo) => {
      const index = state.todos.findIndex(el => el.id === todo.id)
      state.todos[index] = todo
    },

    DELETE_ALL_TODOS: state => {
      state.todos = []
      console.log(state.todos)
    }
  },

  actions: {
    addTodo: (store, todo: Todo) => {
      store.commit('ADD_TODO', todo)
    },

    deleteTodo: (store, id: number) => {
      store.commit('DELETE_TODO', id)
    },

    updateTodo: (store, todo: number) => {
      store.commit('UPDATE_TODO', todo)
    },

    deleteAllTodos: store => {
      store.commit('DELETE_ALL_TODOS')
    }
  },

  getters: {
    todos: state => state.todos,
    //todosRemaining: state => state.todos.filter(todo => !todo.done),
    //todosDone: state => state.todos.filter(todo => todo.done),
    todosRemainingCount: state => {
      const todosRemaining = state.todos.filter(todo => !todo.done)
      return todosRemaining.length
    },
    todosDoneCount: state => {
      const todosDone = state.todos.filter(todo => todo.done)
      return todosDone.length
    }
  }
})
