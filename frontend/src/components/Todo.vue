<template>
    <div class="container">
        <TodoForm/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo" :markAsDone="markAsDone" :markAsPending="markAsPending"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
export default {
    name: 'Todo',

    components: {
        TodoForm,
        TodoList
    },

    methods: mapActions(['getTodos', 'deleteTodo', 'markAsDone', 'markAsPending']),

    computed: mapGetters(['todos']),

    mounted(){
        this.getTodos();
    }
}
</script>

<style scoped>
    
</style>