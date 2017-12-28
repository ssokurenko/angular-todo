import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TodoService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  public getTasks() {
    return this.db.list('tasks').valueChanges();
  }

  public setTask(task: Task) {
    this.db.object('/tasks/' + task.timestamp ).set(task);
  }

  public updateTask(task: Task) {
    this.db.object('/tasks/' + task.timestamp ).update(task);
  }

  public removeTask(task: Task) {
    this.db.object('/tasks/' + task.timestamp ).remove();
  }
}
