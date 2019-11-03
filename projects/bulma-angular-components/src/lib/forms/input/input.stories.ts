import { BulmaFieldComponent } from "../field/field.component";
import { BulmaInputDirective } from "./input.directive";
import { BulmaAngularComponentsModule } from "../../bulma-angular-components.module";

import { moduleMetadata } from "@storybook/angular";

export default {
  title: "Input Component",
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
    <input b-input type="input" placeholder="default"/>
  </div>
  `
});
plain.story = { name: "default" };

export const success = () => ({
  template: `
  <div b-field="Label" class="success">
    <input b-input type="input" placeholder="success"/>
  </div>
  `
});

export const large = () => ({
  template: `
  <div b-field="Label" size="large">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const dangerLoading = () => ({
  template: `
  <div b-field="Label" class="danger" [loading]="true">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const largeLoading = () => ({
  template: `
  <div b-field="Label" size="large" [loading]="true">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const smallSuccessHelp = () => ({
  template: `
  <div b-field="Label" size="small" class="success" [loading]="true" help="Good Work!!">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const iconLeft = () => ({
  template: `
  <div b-field="Label" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const smallIcon = () => ({
  template: `
  <div b-field="Label" size="small" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const largeIcon = () => ({
  template: `
  <div b-field="Label" size="large" icon="envelope" class="success" [loading]="true" help="Good Work!!">
    <input b-input type="input" placeholder="large"/>
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
    <input b-input type="input" placeholder="large"/>
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
      <input b-input type="input" placeholder="First"/>
    </div>
    <div b-field
      icon="check"
      class="info"
      help="Second">
      <input b-input type="input" placeholder="Second"/>
    </div>
    <div b-field
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <input b-input type="password" placeholder="Third"/>
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
      <input b-input type="input" placeholder="First"/>
    </div>
    <div b-field
      size="small"
      icon="check"
      class="info"
      help="Second">
      <input b-input type="input" placeholder="Second"/>
    </div>
    <div b-field
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <input b-input type="password" placeholder="Third"/>
    </div>
  </div>
  `
});

export const wackoHorizontal = () => ({
  template: `
  <div b-field-horizontal="horizontal">
    <div b-field
      size="small"
      icon="envelope"
      [loading]="true"
      class="success"
      help="First">
      <input b-input type="input" placeholder="First"/>
    </div>
    <div b-field
      size="medium"
      icon="check"
      class="info"
      help="Second">
      <input b-input type="input" placeholder="Second"/>
    </div>
    <div b-field
      size="large"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <input b-input type="password" placeholder="Third"/>
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
      <input b-input type="input" placeholder="First"/>
    </div>
    <div b-field="label 2"
      size="small"
      icon="check"
      class="info"
      help="Second">
      <input b-input type="input" placeholder="Second"/>
    </div>
    <div b-field="label 3"
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <input b-input type="password" placeholder="Third"/>
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
      <input b-input type="input" placeholder="First"/>
    </div>
    <div b-field="label 2"
      size="small"
      icon="check"
      class="info"
      help="Second">
      <input b-input type="input" placeholder="Second"/>
    </div>
    <div b-field="label 3"
      size="small"
      icon="user"
      iconRight="key"
      class="danger"
      help="third">
      <input b-input type="password" placeholder="Third"/>
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
      <input 
        type="input" 
        placeholder="large" 
        class="input is-success"/>
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
      <input 
        type="input" 
        placeholder="large" 
        class="input is-large is-success"/>
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
          <input 
            type="input" 
            placeholder="left" 
            class="input is-large is-success"/>
          <span class="icon is-left is-large">
            <i class="fa fa-check"></i>
          </span>
          <p class="help is-large is-success">Good Work!!</p>
        </div>
      </div>
      <div class="field">
        <div class="control is-loading is-large has-icons-left">
          <input 
            type="input" 
            placeholder="middle" 
            class="input is-large is-info"/>
          <span class="icon is-left is-large">
            <i class="fa fa-check"></i>
          </span>
          <p class="help is-large is-info">Good Work!!</p>
        </div>
      </div>
      <div class="field">
        <div class="control is-loading is-large has-icons-left">
          <input 
            type="input" 
            placeholder="right" 
            class="input is-large is-danger"/>
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
