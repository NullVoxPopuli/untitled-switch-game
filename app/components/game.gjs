import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';
import { Switch, LightSwitch } from './switch';
import Config from './config';

export default class GameComponent extends Component {
  <template>
    Light: {{this.light}}
    <hr>

    {{#each this.switches as |switch|}}
      <Switch @on={{switch.on}} @onClick={{fn this.flip switch}} />
    {{/each}}

    <hr>

    <Config />
  </template>

  @tracked isOn = false;

  @cached
  get switches() {
    let result = [];

    for (let i = 0; i < this.numSwitches; i++) {
      result.push(new LightSwitch());
    }

    return result;
  }

  @action
  flip(lightSwitch) {
    this.isOn = !this.isOn;
    lightSwitch.flip();
  }

  get light() {
    return this.isOn ? 'On' : 'Off';
  }
}
