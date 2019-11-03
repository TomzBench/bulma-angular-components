import { BulmaAngularComponentsModule } from "bulma-angular-components";
import { DemoInputsComponent } from "./demo-inputs.component";
import { moduleMetadata } from "@storybook/angular";

export default {
  title: "Input Demo",
  decorators: [
    moduleMetadata({
      imports: [BulmaAngularComponentsModule],
      providers: [],
      declarations: []
    })
  ]
};

export const plain = () => ({
  component: DemoInputsComponent
});
plain.story = { name: "default" };
