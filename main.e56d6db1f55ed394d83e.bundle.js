webpackJsonp([1,4],{301:function(t,e,s){"use strict";var n=s(0),a=s(302);s.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,s,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(i<3?a(o):i>3?a(e,s,o):a(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t.prototype.ngOnInit=function(){this.tasks=a.a.getTasks()||[],this.updateProgress(),this.showModifyHint=!0},t.prototype.updateProgress=function(){for(var t=0,e=0;e<this.tasks.length;e++)this.tasks[e].isDone&&t++;this.completedTasks=t,this.tasks.length?this.progress=t/this.tasks.length*100+"%":this.progress=0,console.log(this.progress)},t.prototype.addTask=function(){if(this.newTaskTitle){var t={timestamp:Date.now(),title:this.newTaskTitle,isDone:!1};this.tasks.unshift(t),this.newTaskTitle="",this.updateProgress(),a.a.updateTasks(this.tasks)}},t.prototype.updateTaskStatus=function(t){for(var e=0;e<this.tasks.length;e++)if(this.tasks[e].timestamp===t)return this.tasks[e].isDone=!this.tasks[e].isDone,this.updateProgress(),void a.a.updateTasks(this.tasks)},t.prototype.updateTasks=function(){this.showModifyHint=!1,a.a.updateTasks(this.tasks)},t.prototype.deleteTask=function(t){for(var e=0;e<this.tasks.length;e++)if(this.tasks[e].timestamp===t)return this.tasks.splice(e,1),this.updateProgress(),void a.a.updateTasks(this.tasks)},t.prototype.deleteDoneTasks=function(){for(var t=Object.assign([],this.tasks),e=0;e<this.tasks.length;e++)if(this.tasks[e].isDone)for(var s=0;s<t.length;s++)t[s].timestamp===this.tasks[e].timestamp&&t.splice(s,1);a.a.updateTasks(t),this.tasks=a.a.getTasks(),this.updateProgress()},t=i([s.i(n.U)({selector:"app-tasks",template:s(613),styles:[s(611)]}),o("design:paramtypes",[])],t)}()},302:function(t,e,s){"use strict";var n=s(0);s.d(e,"a",function(){return o});var a=this&&this.__decorate||function(t,e,s,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(i<3?a(o):i>3?a(e,s,o):a(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=function(){function t(){}return t.getTasks=function(){return JSON.parse(localStorage.getItem("tasks"))},t.updateTasks=function(t){var e=JSON.stringify(t);localStorage.setItem("tasks",e)},t=a([s.i(n.d)(),i("design:paramtypes",[])],t)}()},345:function(t,e){function s(t){throw new Error("Cannot find module '"+t+"'.")}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id=345},346:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(434),a=s(0),i=s(456),o=s(455);i.a.production&&s.i(a.a)(),s.i(n.a)().bootstrapModule(o.a)},454:function(t,e,s){"use strict";var n=s(0),a=s(301),i=s(302);s.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,s,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(i<3?a(o):i>3?a(e,s,o):a(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t=o([s.i(n.U)({selector:"app-root",template:s(612),styles:[s(610)],entryComponents:[a.a],providers:[i.a]}),r("design:paramtypes",[])],t)}()},455:function(t,e,s){"use strict";var n=s(192),a=s(0),i=s(424),o=s(430),r=s(454),c=s(301);s.d(e,"a",function(){return f});var l=this&&this.__decorate||function(t,e,s,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(i<3?a(o):i>3?a(e,s,o):a(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){}return t=l([s.i(a.b)({declarations:[r.a,c.a],imports:[n.a,i.a,o.a],providers:[],bootstrap:[r.a]}),p("design:paramtypes",[])],t)}()},456:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n={production:!0}},610:function(t,e){t.exports=""},611:function(t,e){t.exports=".card{margin-top:1rem}.card .status{display:-webkit-box;display:-ms-flexbox;display:flex;height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card .status>button{margin-left:1rem}.card .progress{margin:1rem 0}.card .progress-bar{height:10px}.card .add-new-task{margin:0 0 2rem}.task{margin:.5rem 0}.task .input-group-btn{border:1px solid rgba(0,0,0,.15);border-left:0;border-radius:0 4px 4px 0}.task .input-group.completed{opacity:.2}"},612:function(t,e){t.exports="<app-tasks></app-tasks>\n"},613:function(t,e){t.exports='<div class="card">\n    <div class="card-body">\n        <h5>\n            <i class="fa fa-list-ul" aria-hidden="true"></i>\n            Todo list\n        </h5>\n        <div class="status">\n            <small *ngIf="!tasks.length">\n                Please add tasks.\n            </small>\n            <small *ngIf="tasks.length && progress!==\'100%\'">\n                Completed {{ completedTasks }} out of {{ tasks.length}} tasks.\n            </small>\n            <small *ngIf="progress===\'100%\'" class="text-primary">\n                Well done! All tasks completed.\n            </small>\n            <button *ngIf="completedTasks" type="button" class="btn btn-sm btn-light" (click)="deleteDoneTasks()">\n                Clear completed\n                <i class="fa fa-trash-o" aria-hidden="true"></i>\n            </button>\n        </div>\n        <div class="progress">\n            <div class="progress-bar" role="progressbar" [ngStyle]="{\'width\': progress}"></div>\n        </div>\n        <form class="add-new-task" (submit)="addTask()">\n            <div class="input-group">\n                <input type="text" [(ngModel)]="newTaskTitle" name="newTaskTitle" class="form-control"\n                       placeholder="Add new task" aria-label="Add new task">\n                <span class="input-group-btn">\n                    <button class="btn btn-primary" type="button" (click)="addTask()">\n                        <i class="fa fa-plus"></i>\n                    </button>\n                </span>\n            </div>\n        </form>\n        <div *ngIf="!tasks.length" class="small">\n            <p>There are not tasks here yet.</p>\n            <p>Type a task title and press \'Enter\' or click the\n                <button class="btn btn-sm btn-primary">\n                    <i class="fa fa-plus"></i>\n                </button>\n                icon above.\n            </p>\n        </div>\n        <div class="task" *ngFor="let task of tasks">\n            <div class="input-group" [ngClass]="{\'completed\': task.isDone}">\n                <span class="input-group-addon">\n                    <input type="checkbox" [checked]="task.isDone" (change)="updateTaskStatus(task.timestamp)">\n                </span>\n                <input type="text" class="form-control" [(ngModel)]="task.title" (ngModelChange)="updateTasks()">\n                <span class="input-group-btn">\n                    <button type="button" class="btn btn-light" (click)="deleteTask(task.timestamp)">\n                        <i class="fa fa-trash-o" aria-hidden="true"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <p class="small" *ngIf="showModifyHint && tasks.length">\n            Click a task title to modify it.\n        </p>\n    </div>\n</div>\n'},625:function(t,e,s){t.exports=s(346)}},[625]);