

const initialState = {
    todos: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  