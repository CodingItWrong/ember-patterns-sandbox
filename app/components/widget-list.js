import Component from '@glimmer/component';
import { filter } from '@ember/object/computed';

export default class WidgetListComponent extends Component {
  @filter('args.widgets.@each.id', function (widget) {
    return !!widget.id;
  })
  savedWidgets;
}
