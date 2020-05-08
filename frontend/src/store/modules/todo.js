import api from '../../service/api';

const state = {
    todos: [],
    description: ''
};

const getters = {
    todos: state => state.todos,
    description: state => state.description
};

const actions = {
    // Função para obter a lista de tarefas
   async getTodos ({ commit }, description ) {
       const search = description ? `&description__regex=/${description}/` : '';
       const response = await api.get(`/todos?sort=-createdAt${search}`);
       commit('setTodos', response.data );
    },

    // Função para mudar o valor do input (description)
    changeDescription: ({ commit }, e) => {
        commit('setDescription', e.target.value )
    },

    // Função para adicionar uma nova tarefa
    async addTodo ({dispatch}) {
        await api.post('/todos', { description: state.description });
        dispatch('getTodos');
    },

    // Função para alterar o done ( marcar como completo )
    async markAsDone({ dispatch }, todo){
        await api.put(`/todos/${todo}`, { done: true });
        dispatch('getTodos');
    },

    // Função para marcar como pendente
    async markAsPending( { dispatch}, todo){
        await api.put(`/todos/${todo}`, { done: false });
        dispatch('getTodos');
    },

    // Função para deletar tarefa
    deleteTodo ({ dispatch }, todo) {
        api.delete(`/todos/${todo}`);
        dispatch('getTodos');
    },

    // Função para pesquisar tarefa
    searchTodo({ dispatch }, description ){
        dispatch('getTodos', description);
    }
};

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos;
    },

    setDescription: (state, event) => {
        state.description = event;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}