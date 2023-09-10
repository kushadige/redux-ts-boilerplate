import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(url);
    const data = (await response.json()) as Todo[];

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: data,
    });
  };
};

export const deleteTodo = (todoId: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${url}/${todoId}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      dispatch<DeleteTodoAction>({
        type: ActionTypes.DELETE_TODO,
        payload: todoId,
      });
    }
  };
};

// export const deleteTodo = (todoId: number): DeleteTodoAction => ({
//   type: ActionTypes.DELETE_TODO,
//   payload: todoId,
// });

// dispatch({ type: ActionTypes.TOGGLE_LOADING });
