import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-task-item',
  imports: [AngularMaterialModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

}
