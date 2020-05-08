<template>
    <div class="todo-list">
        <div v-if="todos.length > 1">
            <ul class="todos">
                <li class="todos-item" v-for="todo in todos" :key="todo._id" >
                    <span :class="todo.done ? 'todo-description done': 'todo-description' ">{{ todo.description }}</span>

                    <div>
                        <i @click="markAsDone(todo._id)" v-if="!todo.done" class="fa fa-check"></i>
                        <i @click="markAsPending(todo._id)" v-if="todo.done" class="fa fa-repeat"></i>
                        <i @click="deleteTodo(todo._id)" v-if="todo.done" class="fa fa-trash"></i>
                    </div>
                </li>
            </ul>
        </div>

        <p v-else>
            Não há nenhuma tarefa cadastrada...
        </p>
    </div>
</template>

<script>
export default {
    name: 'TodoList',

    props: ['todos', 'deleteTodo', 'markAsDone', 'markAsPending']
}
</script>

<style scoped>
    .todo-list{
        margin-top: 20px;
    }

    .todo-description{
        color: var(--dark);
    }

    .done{
        color: var(--grey);
        text-decoration: line-through;
    }

    .todos-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .todos-item i{
        margin: 0 5px;
        cursor: pointer;
    }

    .todos-item .fa-check{
        color: var(--light-blue);
    }

    .todos-item .fa-trash{
        color: var(--light-red);
    }
    
    .todos-item .fa-repeat{
        color: var(--light-purple);
    }

    .todos-item{
        list-style: none;
        padding: 10px 0;
        border-bottom: solid 1px #dddddd;
    }

</style>