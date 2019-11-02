import { moduleMetadata } from "@storybook/angular";
import { BulmaAngularComponentsModule } from "../bulma-angular-components.module";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[input-test]",
  template: `
    <div b-field="test">
      <input />
    </div>
  `,
  styles: []
})
class InputStoryComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

export default {
  title: "Forms",
  decorators: [
    moduleMetadata({
      imports: [BulmaAngularComponentsModule],
      providers: [],
      declarations: [InputStoryComponent]
    })
  ]
};

export const input = () => ({
  Component: InputStoryComponent,
  props: {}
});
