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
  // Listas de tareas pendientes y completadas
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  // Inicialización del componente y suscripción a los cambios en las tareas
  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.pendingTasks = tasks.filter((task) => !task.completed);
      this.completedTasks = tasks.filter((task) => task.completed);
    });
  }

  // Método que llama al servicio para actualizar una tarea
  onToggleCompleted(id: number): void {
    this.taskService.toggleCompleted(id);
  }

  // Método que llama al servicio para eliminar una tarea
  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  // Método que llama al servicio para actualizar una tarea
  onUpdateTask(taskToUpdate: Task, newName: string): void {
    const updatedTask = { ...taskToUpdate, name: newName };
    this.taskService.updateTask(updatedTask);
  }
}
