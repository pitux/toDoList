import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tareas: Task[]= TASKS;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
