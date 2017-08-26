import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TodosComponent implements OnInit {
  tasks;
  newTaskTitle;

  constructor() {
  }

  ngOnInit() {
    this.tasks = TodoService.getTasks() || [];
  }

  addTask() {
    if (this.newTaskTitle) {
      this.tasks.push({
        timestamp: Date.now(),
        title: this.newTaskTitle,
        isDone: false
      });
      this.newTaskTitle = '';
      TodoService.updateTasks(this.tasks);
    }
  }

  updateTaskStatus(timestamp) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].timestamp === timestamp) {
        this.tasks[i].isDone = !this.tasks[i].isDone;
        TodoService.updateTasks(this.tasks);
        return;
      }
    }
  }

  deleteTask(timestamp) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].timestamp === timestamp) {
        this.tasks.splice(i, 1);
        TodoService.updateTasks(this.tasks);
        return;
      }
    }
  }

  deleteAllTasks() {
    this.tasks = [];
    TodoService.updateTasks([]);
  }
}
