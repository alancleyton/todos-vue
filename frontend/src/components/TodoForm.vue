<template>
    <form class="todo-form"> 
        <input  v-on:input="changeDescription" class="todo-form__input" type="text" placeholder="Adicionar ou pesquisar tarefa">
        <button @click="addTodo" type="button" class="todo-form__btn plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
        <button @click="searchTodo(description)" class="todo-form__btn search" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'TodoForm',

    computed: mapGetters(['description']),
    methods: mapActions(['changeDescription', 'addTodo', 'searchTodo'])
}
</script>

<style scoped>

    .todo-form{
        border-bottom: solid 1px #ddd;
    }

    .todo-form__input{
        width: 80%;
        height: 40px;
        padding: 10px;
        
        border: none;
        border: solid 1px #ddd;
        border-radius: 0 10px;
    }

    .todo-form__btn{
        height: 40px;
        width: 40px;
        margin: 10px;
        border-radius: 50%;

        border: none;
        outline: none;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .30);
        cursor: pointer;
    }

    .plus{
        background-color: var(--light-blue);
    }

    .search{
        background-color: var(--light-purple);
    }

    button i {
        color: var(--white);
    }

</style>
