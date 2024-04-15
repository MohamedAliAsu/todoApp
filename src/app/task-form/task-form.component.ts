import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task = new Task(0, '', '', new Date(), false);
  @Output() taskSubmit: EventEmitter<Task> = new EventEmitter();
  
  @Input() editingTask: Task | null = null;
  @Output() updateTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.editingTask) {
      this.task = { ...this.editingTask };
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editingTask'] && this.editingTask) {
      this.task = { ...this.editingTask };  // Populates form fields with the details of the editing task
    }
  }
  

  submitTask() {
    if (this.editingTask) {
      this.updateTask.emit(this.task);
    } else {
      this.taskSubmit.emit(this.task);
    }
    this.task = new Task(0, '', '', new Date(), false); // Reset the task form
  }
}
