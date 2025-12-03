import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { type Task } from '../../dummy_tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
