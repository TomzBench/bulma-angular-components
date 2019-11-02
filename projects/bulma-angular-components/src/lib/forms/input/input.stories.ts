import { BulmaFieldComponent } from "../field/field.component";
import { BulmaInputDirective } from "./input.directive";
import { BulmaAngularComponentsModule } from "../../bulma-angular-components.module";

import { moduleMetadata } from "@storybook/angular";

export default {
  title: "Login Component",
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
  <div b-field="Label" class="large">
    <input b-input type="input" placeholder="large"/>
  </div>
  `
});

export const loading = () => ({
  template: `
  <div b-field="Label" class="danger" [loading]="true">
    <input b-input type="input" placeholder="large"/>
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
