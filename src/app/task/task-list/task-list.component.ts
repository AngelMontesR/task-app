import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-task-list',
  imports: [AngularMaterialModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
