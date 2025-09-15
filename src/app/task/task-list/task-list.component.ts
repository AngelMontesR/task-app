import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/angular-material/angular-material.module';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule, SharedModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.pendingTasks = tasks.filter((task) => !task.completed);
      this.completedTasks = tasks.filter((task) => task.completed);
    });
  }

  onToggleCompleted(id: number): void {
    this.taskService.toggleCompleted(id);
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
