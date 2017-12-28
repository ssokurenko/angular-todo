import {Component} from '@angular/core';
import {TodosComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [TodosComponent],
  providers: []
})
export class AppComponent {
}
