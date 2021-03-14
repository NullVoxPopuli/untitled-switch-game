import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';
import { fn } from '@ember/helper';

import { Switch, switches, LightSwitch } from './switch';
import Config from './config';

export default class GameComponent extends Component {
  @tracked isOn = false;

  @action
  flip(lightSwitch) {
    this.isOn = !this.isOn;
    lightSwitch.flip();
  }

  get light() {
    return this.isOn ? 'On' : 'Off';
  }

  static template = hbs`
    Light: {{this.light}}
    <hr>

    {{#each (switches) as |switch|}}
      <Switch @on={{switch.on}} @onClick={{fn this.flip switch}} />
    {{/each}}

    <hr>

    <Config />
  `;
}
