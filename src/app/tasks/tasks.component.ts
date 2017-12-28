import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

import { Task } from '../models/task.model';

import { Observable } from 'rxjs/observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [ TodoService ]
})

export class TodosComponent implements OnInit {
  tasks: Task[];
  completedTasks: number;
  progress: string;
  newTaskTitle: string;
  tasksObservable: Observable<any[]>;
  firebaseTasks;
  tasksLimit: number;

  constructor(
    private todoService: TodoService
  ) {
    this.tasksLimit = 20;
  }

  ngOnInit() {
    this.tasks = [];
    this.tasksObservable = this.todoService.getTasks();
    this.tasksObservable.subscribe(data => {
      this.tasks = data;
      this.updateProgress();
    });
  }

  updateProgress() {
    let completeTasks = 0;
    _.each(this.tasks, task => {
      if (task.isDone) {
        completeTasks++;
      }
    });

    this.completedTasks = completeTasks;
    this.progress = this.tasks.length ? completeTasks/this.tasks.length * 100 + '%' : '0';
  }

  addTask() {
    if (this.tasks.length >= this.tasksLimit) {
      alert(`You've reached the limit of ${this.tasksLimit} tasks.`);
      return false;
    }

    if (this.isDuplicatedTitle(this.newTaskTitle)) {
      alert(`You already have task "${this.newTaskTitle}" in the list.`);
      return false;
    }

    if (this.newTaskTitle) {
      const newTask: Task = {
        timestamp: Date.now() as number,
        title: this.newTaskTitle,
        isDone: false
      };
      this.todoService.setTask(newTask);
      this.tasks.unshift(newTask);
      this.newTaskTitle = '';
    }
  }

  isDuplicatedTitle(title: string) {
    let result = false;
    _.each(this.tasks, task => {
      if (task.title === title) {
        result = true;
      }
    });
    return result;
  }

  updateTaskStatus(task) {
    task.isDone = !task.isDone;
    this.todoService.updateTask(task);
  }

  deleteTask(task) {
    this.todoService.removeTask(task);
  }

  deleteCompletedTasks() {
    _.each(this.tasks, task => {
      if (task.isDone) {
        this.deleteTask(task);
      }
    });
    this.completedTasks = 0;
  }
}
