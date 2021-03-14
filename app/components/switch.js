import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { helper } from '@ember/component/helper';
import { hbs } from 'ember-template-imports';

export const switches = helper(([count]) => new Array(count).map(() => new LightSwitch()));

class LightSwitch {
  @tracked on = Boolean(Math.round(Math.random()));

  @action
  flip() {
    this.on = !this.on;
  }
}

const inputId = helper(() => (Math.random() * 0xfffff * 1000000).toString(16).split('.')[0]);

export const Switch = hbs`
  {{#let (inputId) as |id|}}
    <input
      {{on 'change' @onClick}}
      class="light-switch"
      type="checkbox"
      checked={{@on}}
      id={{id}}
    >
    <label for={{id}}>
      <div class="screw"></div>
      <div class="switch"></div>
      <div class="screw"></div>
    </label>
  {{/let}}
`;
