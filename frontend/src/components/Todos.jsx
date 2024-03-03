
export function Todos({todos}) {
    return (
        <div>
            {todos.map(function(todo) {
                return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "completed" : "Mark as Done"}</button>
                    </div>
                );
            })}
        </div>
    );
}
