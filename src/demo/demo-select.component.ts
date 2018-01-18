import { Component } from '@angular/core';

@Component({
  selector: 'demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: []
})
export class DemoSelectComponent {
  options: string[] = ["New York", "California", "Ohio"];
  constructor() {};
}
