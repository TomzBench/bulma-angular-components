import { Directive, OnInit, HostBinding, Input } from "@angular/core";

@Directive({ selector: "[b-input]" })
export class BulmaInputDirective implements OnInit {
  constructor() {}
  class_: string;
  @Input()
  set class(value: string) {
    if (this[this.class_]) this[this.class_] = false;
    this.class_ = value;
    this[this.class_] = true;
  }
  get class(): string {
    return this.class_;
  }

  @Input() size: string;
  @HostBinding("class.input") hasClass: boolean = true;
  @HostBinding("class.is-small") small: boolean;
  @HostBinding("class.is-medium") medium: boolean;
  @HostBinding("class.is-large") large: boolean;
  @HostBinding("class.is-success") success: boolean;
  @HostBinding("class.is-danger") danger: boolean;

  ngOnInit() {
    if (this.size) this[this.size] = true;
    if (this.class) this[this.class] = true;
  }
}
