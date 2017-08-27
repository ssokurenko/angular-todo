import {Component} from '@angular/core';
import {TodosComponent} from './tasks/tasks.component';
import {TodoService} from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [TodosComponent],
  providers: [TodoService]
})
export class AppComponent {
}
