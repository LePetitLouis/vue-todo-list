import Todo from '@/models/todo'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        description: 'Test 1',
        done: false
      },
      {
        id: 1,
        description: 'Test 2',
        done: false
      }
    ]
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
    }
  },

  getters: {
    todos: state => state.todos,
    //todosRemaining: state => state.todos.filter(todo => !todo.done),
    //todosDone: state => state.todos.filter(todo => todo.done),
    //todosRemainingCount: (state, getters) => getters.todosRemaining(state).length(),
    //todosDoneCount: (state, getters) => getters.todosDone(state).length()
  }
})
