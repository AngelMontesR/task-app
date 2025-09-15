// src/app/task/task-item/task-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';
import {SharedModule} from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FormsModule,
    SharedModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {

  // Propiedades de entrada y salida
  @Input({ required: true }) task!: Task;
  @Output() toggleCompleted = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();

  // Propiedades internas
  isEditing = false;
  editedTaskName = '';

  // Método que alterna el modo de edicion (bandera)
  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
    this.editedTaskName = this.task.name;
  }

  // Método que guarda los cambios realizados en la tarea
  saveChanges(): void {
    this.update.emit(this.editedTaskName);
    this.isEditing = false;
  }

  // Métodos que emiten eventos a los componentes padres
  onToggleCompleted(): void {
    this.toggleCompleted.emit();
  }

  // Método que emite el evento de eliminación
  onDelete(): void {
    this.delete.emit();
  }
}
