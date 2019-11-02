import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[b-field]",
  templateUrl: "./field.component.html",
  styles: []
})
export class BulmaFieldComponent implements OnInit {
  @Input("b-field") label: string;
  @Input() class: string;
  @Input() loading: boolean;
  @Input() size: string;
  @Input() icon: string;
  @Input() iconRight: string;
  @Input() help: string;
  constructor() {}

  ngOnInit() {}
}
