import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TodosComponent implements OnInit {
  tasks;
  completedTasks;
  progress;
  newTaskTitle;
  showModifyHint;

  constructor() {
  }

  ngOnInit() {
    this.tasks = TodoService.getTasks() || [];
    this.updateProgress();
    this.showModifyHint = true;
  }

  updateProgress() {
    let completeTasks = 0;

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isDone) {
        completeTasks++;
      }
    }
    this.completedTasks = completeTasks;

    if (this.tasks.length) {
      this.progress = completeTasks/this.tasks.length * 100 + '%';
    } else {
      this.progress = 0;
    }

    console.log(this.progress);
  }

  addTask() {
    if (this.newTaskTitle) {
      const newTask = {
        timestamp: Date.now(),
        title: this.newTaskTitle,
        isDone: false
      };
      this.tasks.unshift(newTask);
      this.newTaskTitle = '';
      this.updateProgress();
      TodoService.updateTasks(this.tasks);
    }
  }

  updateTaskStatus(timestamp) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].timestamp === timestamp) {
        this.tasks[i].isDone = !this.tasks[i].isDone;
        this.updateProgress();
        TodoService.updateTasks(this.tasks);
        return;
      }
    }
  }

  updateTasks() {
    this.showModifyHint = false;
    TodoService.updateTasks(this.tasks);
  }

  deleteTask(timestamp) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].timestamp === timestamp) {
        this.tasks.splice(i, 1);
        this.updateProgress();
        TodoService.updateTasks(this.tasks);
        return;
      }
    }
  }

  deleteDoneTasks() {
    let tempTasks = Object.assign([], this.tasks);
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isDone) {
        for (let j = 0; j < tempTasks.length; j++) {
          if (tempTasks[j].timestamp === this.tasks[i].timestamp) {
            tempTasks.splice(j, 1);
          }
        }
      }
    }

    TodoService.updateTasks(tempTasks);
    this.tasks = TodoService.getTasks();
    this.updateProgress();
  }
}
