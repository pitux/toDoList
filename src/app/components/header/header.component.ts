import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Lista de tareas';


  constructor() { }

  ngOnInit(): void {
  }

    toogleAddTask() {
    alert('Add Task header component');
  }

}
