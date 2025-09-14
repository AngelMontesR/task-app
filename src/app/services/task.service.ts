import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

const LOCAL_STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  // Carga las tareas de localStorage al iniciar el servicio
  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      this.tasksSource.next(JSON.parse(storedTasks));
    }
  }

  // Guarda el estado actual de las tareas en localStorage
  private saveTasksToLocalStorage(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.getTasks()));
  }

  getTasks(): Task[] {
    return this.tasksSource.getValue();
  }

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

  toggleCompleted(id: number): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  updateTask(id: number, newName: string): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, name: newName } : task
    );
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  deleteTask(id: number): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSource.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }
}
