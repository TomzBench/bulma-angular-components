import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-tabs",
  templateUrl: "./demo-tabs.component.html",
  styles: []
})
export class DemoTabsComponent implements OnInit {
  activeA = 0;
  activeB = 0;
  activeC = 0;
  activeD = 0;
  activeE = 0;
  constructor() {}

  ngOnInit() {}
}
