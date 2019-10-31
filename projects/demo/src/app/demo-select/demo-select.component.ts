import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-select",
  templateUrl: "./demo-select.component.html",
  styles: []
})
export class DemoSelectComponent implements OnInit {
  options: string[] = ["New York", "California", "Ohio"];
  constructor() {}

  ngOnInit() {}
}
