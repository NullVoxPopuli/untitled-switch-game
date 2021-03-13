import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class Config extends Component {
  <template>
    Switches: {{this.numSwitches}}
    <button type="button" {{on "click" this.addSwitch}}>
      Add Switch
    </button>
    <button type="button" {{on "click" this.removeSwitch}}>
      Remove Switch
    </button>
  </template>

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

}
