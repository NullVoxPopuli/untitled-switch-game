import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { hbs } from 'ember-template-imports';
import { on } from '@ember/modifier';

export default class Config extends Component {
  @service router;

  get numSwitches() {
    let strSwitches = this.router.currentRoute.queryParams.switches;

    return Math.max(parseInt(strSwitches, 10) || 1, 1);
  }

  @action
  addSwitch() {
    this.router.transitionTo({
      queryParams: { switches: this.numSwitches + 1 },
    });
  }

  @action
  removeSwitch() {
    this.router.transitionTo({
      queryParams: { switches: this.numSwitches - 1 },
    });
  }

  static template = hbs`
    Switches: {{this.numSwitches}}
    <button type="button" {{on "click" this.addSwitch}}>
      Add Switch
    </button>
    <button type="button" {{on "click" this.removeSwitch}}>
      Remove Switch
    </button>
  `;
}
