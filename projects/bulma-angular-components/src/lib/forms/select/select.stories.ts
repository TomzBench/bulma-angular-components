import { BulmaFieldComponent } from "../field/field.component";
import { BulmaSelectDirective } from "./select.directive";
import { BulmaAngularComponentsModule } from "../../bulma-angular-components.module";

import { moduleMetadata } from "@storybook/angular";

export default {
  title: "Select Component",
  decorators: [
    moduleMetadata({
      imports: [BulmaAngularComponentsModule],
      providers: [],
      declarations: []
    })
  ]
};

export const plain = () => ({
  template: `
  <div b-field="Label">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});
plain.story = { name: "default" };

export const success = () => ({
  template: `
  <div b-field="Label" class="success">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const large = () => ({
  template: `
  <div b-field="Label" size="large">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const dangerLoading = () => ({
  template: `
  <div b-field="Label" class="danger" [loading]="true">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const largeLoading = () => ({
  template: `
  <div b-field="Label" size="large" [loading]="true">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const smallSuccessHelp = () => ({
  template: `
  <div b-field="Label" size="small" class="success" [loading]="true" help="Good Work!!">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const iconLeft = () => ({
  template: `
  <div b-field="Label" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const smallIcon = () => ({
  template: `
  <div b-field="Label" size="small" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const largeIcon = () => ({
  template: `
  <div b-field="Label" size="large" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const twoIcons = () => ({
  template: `
  <div b-field="Label" 
    size="large" 
    icon="envelope" 
    iconRight="check"
    class="success" 
    help="Good Work!!">
    <select b-select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
  `
});

export const horizontal = () => ({
  template: `
  <div b-field-horizontal="horizontal">
    <div b-field
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      icon="check"
      class="info"
      help="Second">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>
  `
});

export const smallHorizontal = () => ({
  template: `
  <div b-field-horizontal="horizontal" size="small">
    <div b-field
      size="small"
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      size="small"
      icon="check"
      class="info"
      help="Second">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>
  `
});

export const wackoHorizontal = () => ({
  template: `
  <div b-field-horizontal="horizontal" size="small">
    <div b-field
      size="small"
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      size="medium"
      icon="check"
      class="info"
      help="Second">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field
      size="large"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>
  `
});

export const extraLabelsHorizontal = () => ({
  template: `
  <div b-field-horizontal="" size="small">
    <div b-field="label 1"
      size="small"
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field="label 2"
      size="small"
      icon="check"
      class="info"
      help="Second">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field="label 3"
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>
  `
});

export const horizontalWithButton = () => ({
  template: `
  <div b-field-horizontal="" size="small">
    <div b-field="label 1"
      size="small"
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field="label 2"
      size="small"
      icon="check"
      class="info"
      help="Second">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div b-field="label 3"
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>
  <div b-field-horizontal>
    <div class="field">
      <button class="button is-primary">Submit</button>
    <div>
  </div>
  `
});

export const raw = () => ({
  template: `
  <div class="field">
    <label class="label">Label</label>
    <div class="control has-icons-left has-icons-right">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <span class="icon is-left">
        <i class="fa fa-check"></i>
      </span>
      <span class="icon is-right">
        <i class="fa fa-check"></i>
      </span>
      <p class="help is-success">Good Work!!</p>
    </div>
  </div>
  `
});

export const rawLoading = () => ({
  template: `
  <div class="field">
    <label class="label is-large">Label</label>
    <div class="control is-loading is-large has-icons-left">
      <select b-select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <span class="icon is-left is-large">
        <i class="fa fa-check"></i>
      </span>
      <p class="help is-large is-success">Good Work!!</p>
    </div>
  </div>
  `
});

export const rawHorizontal = () => ({
  template: `
  <div class="field is-horizontal">
    <div class="field-label is-large">
      <label class="label is-large">Label</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control is-loading is-large has-icons-left">
          <select b-select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span class="icon is-left is-large">
            <i class="fa fa-check"></i>
          </span>
          <p class="help is-large is-success">Good Work!!</p>
        </div>
      </div>
      <div class="field">
        <div class="control is-loading is-large has-icons-left">
          <select b-select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span class="icon is-left is-large">
            <i class="fa fa-check"></i>
          </span>
          <p class="help is-large is-info">Good Work!!</p>
        </div>
      </div>
      <div class="field">
        <div class="control is-loading is-large has-icons-left">
          <select b-select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <span class="icon is-left is-large">
            <i class="fa fa-check"></i>
          </span>
          <p class="help is-large is-danger">Good Work!!</p>
        </div>
      </div>
    </div>
  </div>
  `
});
