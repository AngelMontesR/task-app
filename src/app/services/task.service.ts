import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

// Llave para almacenar las tareas en el localStorage
const LOCAL_STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  // Fuente de datos reactiva para las tareas
  private tasksSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  // Inicialización del servicio y carga de tareas desde el localStorage
  constructor() {
    this.loadTasksFromLocalStorage();
  }

  // Carga las tareas almacenadas en el localStorage
  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      this.tasksSource.next(JSON.parse(storedTasks));
    }
  }

  // Guarda las tareas actuales en el localStorage
  private saveTasksToLocalStorage(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.getTasks()));
  }

  // Obtiene la lista actual de tareas
  getTasks(): Task[] {
    return this.tasksSource.getValue();
  }

  // Método que añade una nueva tarea usando el servicio
  addTask(name: string): void {
    const currentTasks = this.tasksSource.getValue();
    const newTask: Task = {
      id: Date.now(),
      name,
      completed: false,
    };
    const updatedTasks = [...currentTasks, newTask];
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  // Método que actualiza el nombre de una tarea
  toggleCompleted(id: number): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  // Método que elimina una tarea por su ID
  deleteTask(id: number): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  // Método que actualiza una tarea existente
  updateTask(updatedTask: Task): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }
}
