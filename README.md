## What is Redux?

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

## Why Redux?

- Predictable state management
- Centralized state
- Easy debugging
- Easy testing

## Redux Principles

- Single source of truth
- State is read-only
- Changes are made with pure functions

## Redux Principles Example

- Single source of truth

  ```javascript
  {
    todos: [
      {
        id: 1,
        text: "Learn Redux",
        completed: false,
      },
    ];
  }
  ```

- State is read-only

  ```javascript
  // ❌
  state.todos.push(action.payload);

  // ❌
  state.todos[0].completed = true;

  // ✅
  state.todos.map((todo) =>
    todo.id === action.payload.id ? { ...todo, completed: true } : todo
  );
  ```

- Changes are made with pure functions

  ```javascript
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      default:
        return state;
    }
  }
  ```

## Redux Terms

- State

  > State is a plain JavaScript object that represents the state of your application.
  > The state is read-only. The only way to change the state is to emit an action, an object describing what happened.
  > The state is changed by pure functions called reducers.

- Action

  > An action is something that a user does (clicking a button, typing in a text field, etc.)
  > Action is a function that returns an object with a type and payload.

- Reducer

  > A reducer is a function that takes in the current state and an action and returns a new state.
  > It is a pure function, meaning it does not mutate the state, but returns a new state object.

- Store

  > The store is the object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners.

## Redux Data Flow

- Action is dispatched
- Reducer is called
- Store is updated
- Components are notified of changes

## Redux Data Flow Example

- Action is dispatched

  ```javascript
  dispatch({
    type: "ADD_TODO",
    payload: {
      id: 1,
      text: "Learn Redux",
      completed: false,
    },
  });
  ```

- Reducer is called

  ```javascript
  const initialState = {
    todos: [],
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      default:
        return state;
    }
  }
  ```

- Store is updated

  ```javascript
  {
    todos: [
      {
        id: 1,
        text: "Learn Redux",
        completed: false,
      },
    ];
  }
  ```

- Components are notified of changes

  ```javascript
  const mapStateToProps = (state) => ({
    todos: state.todos,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodoAction(todo)),
  });
  ```
