import { FetchTodosAction, DeleteTodoAction } from "./todos";
// import { FetchBlogsAction, DeleteBlogAction } from "./blogs"

export enum ActionTypes {
  FETCH_TODOS,
  DELETE_TODO,
  // EDIT_TODO,
  // CREATE_TODO,
}

export type Action = FetchTodosAction | DeleteTodoAction;

// export type Action = FetchTodosAction | DeleteTodoAction | FetchBlogsAction | DeleteBlogAction;
