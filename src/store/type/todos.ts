import { TodoModel } from '@/model/todo-model'

export type TodosState = {
  todo: TodoModel | null;
  todos: TodoModel[];
}
