import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
  }

  public static getTasks(): Object {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  public static updateTasks(tasks): void {
    const tasksString = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksString);
  }
}
