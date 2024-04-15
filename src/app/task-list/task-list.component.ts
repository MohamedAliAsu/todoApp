import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editingTask: Task | null = null;
  editingTaskIndex: number = -1;
  @Output() editingTaskEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  onTaskSubmit(task: Task) {
    if (task.id === 0) {
      task.id = this.tasks.length + 1; 
      this.tasks.push(task);
    } else {
      const index = this.tasks.findIndex(t => t.id === task.id);
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  editTask(taskId: number) {
    const index = this.tasks.findIndex(task => task.id === taskId);
    this.editingTask = { ...this.tasks[index] };
    this.editingTaskIndex = index;
    this.editingTaskEmitter.emit(this.editingTask);
  }
  
  markComplete(taskId: number) {
    const index = this.tasks.findIndex(task => task.id === taskId);
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  onUpdateTask(task: Task) {
    this.tasks[this.editingTaskIndex] = task;
    this.clearEditing();
  }
  
  clearEditing() {
    this.editingTask = null;
    this.editingTaskIndex = -1;
  }
  
}
