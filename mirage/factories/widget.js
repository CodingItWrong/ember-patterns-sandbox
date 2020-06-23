import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Widget ${i + 1}`;
  },
});
