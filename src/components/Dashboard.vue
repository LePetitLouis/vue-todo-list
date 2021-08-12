<template>
    <div id="dashboard">
        <div>
            <h1 v-if="todosActualCount">{{ todosActualCount }} todo restant</h1>
            <h1 v-if="todosCompletedCount">{{ todosCompletedCount }} todo completer</h1>
        </div>
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VNodeDirective } from 'vue/types/umd';
import { Getter } from 'vuex-class';

@Component
export default class Dashboard extends Vue {
    @Getter('todosRemainingCount') todosRemainingCount: any 
    @Getter('todosDoneCount') todosDoneCount: any

    get todosActualCount () {
        return this.todosRemainingCount
    }

    get todosCompletedCount() {
        return this.todosDoneCount 
    }

}
</script>

<style scoped>
#dashboard h1{
    font-size: 1rem;
}
</style>
