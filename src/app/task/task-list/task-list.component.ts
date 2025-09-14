import { Component } from '@angular/core';
import { SharedModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-task-list',
  imports: [SharedModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
