import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      title: String,
      description: String,
      done: Boolean
    }]
  },

  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push(todo)
    },

    DELETE_TODO: (state, todo) => {
      state.todos.filter(el => el !== todo)
    }
  },

  actions: {
    addTodo: (store, todo) => {
      store.commit('ADD_TODO', todo)
    },

    deleteTodo: (store, todo) => {
      store.commit('DELETE_TODO', todo)
    }
  },

  getters: {
    todos: state => state.todos,
    todosRemaining: state => state.todos.filter(todo => !todo.done),
    todosDone: state => state.todos.filter(todo => todo.done),
    todosRemainingCount: (state, getters) => getters.todosRemaining(state).length(),
    todosDoneCount: (state, getters) => getters.todosDone(state).length()
  }
})
