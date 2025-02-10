const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL); // Debug log

export const todoService = {
    async getAllTodos(completed) {
        let path = '/todos';
        if (completed !== undefined) {
            path = `/todos?completed=${completed}`;
        }
        const fullUrl = `${API_URL}${path}`;
        console.log("Fetching from:", fullUrl); // Debug log
        const res = await fetch(fullUrl);
        return res.json();
    },

    async createTodo(todo) {
        const res = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
    },

    async updateTodo(id, todo) {
        const res = await fetch(`${API_URL}/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
    },

    async deleteTodo(id) {
        return fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}; 