import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import {
  triggerError,
  triggerSuccess
} from '../../helpers/ember-cli-clipboard';

moduleForComponent('copy-n-status', 'Integration | Component | copy n status', {
  integration: true
});

test('test helpers', function(assert) {

  this.render(hbs`{{copy-n-status}}`);

  assert.equal(this.$('.status__text').text(),
    'N/A',
  'status is initially N/A');

  triggerSuccess(this);

  assert.equal(this.$('.status__text').text(),
    'Success',
  'status is initially N/A');

  triggerError(this);

  assert.equal(this.$('.status__text').text(),
    'Error',
  'status is initially N/A');
});
