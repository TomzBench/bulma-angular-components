import { Directive, OnInit, HostBinding, Input } from "@angular/core";

@Directive({ selector: "[b-input]" })
export class BulmaInputDirective implements OnInit {
  constructor() {}
  @HostBinding("class.input") hasClass: boolean = true;
  @HostBinding("class") classes = "input";

  setClasses(classes: string) {
    this.classes = classes + " input";
  }

  ngOnInit() {}
}
