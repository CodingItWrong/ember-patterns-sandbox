import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewWidgetFormComponent extends Component {
  @service store;

  @tracked name = '';

  @action
  async addWidget(e) {
    e.preventDefault();

    const { name } = this;
    const widget = this.store.createRecord('widget', { name });
    await widget.save();

    this.name = '';
  }
}
