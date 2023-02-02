import {Component, Input, OnInit} from '@angular/core';
import {ComponentData} from "./ComponentData";

@Component({
  selector: 'app-generic-component',
  template: `

    <div class="grid-container">
      <div class="grid-item">{{programmingLanguage}}</div>
      <div class="grid-item">{{framework}}</div>
      <div class="grid-item">{{css}}</div>
    </div>
  `,
  styles: [`
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: #2196F3;
      padding: 30px;
    }
    .grid-item {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 40px;
      font-size: 30px;
      text-align: center;
      margin: 20px;

    }
  `],
})
export class GenericComponent<T> implements ComponentData<T>, OnInit {
  @Input() programmingLanguage: T;
  @Input() framework: T;
  @Input() css: T;

  constructor() {

  }

  ngOnInit(): void {
  }

}
