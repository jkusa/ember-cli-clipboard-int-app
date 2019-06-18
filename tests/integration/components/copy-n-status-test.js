import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {
  triggerCopyError,
  triggerCopySuccess
} from 'ember-cli-clipboard/test-support';

module('Integration | Component | copy n status', function(hooks) {
  setupRenderingTest(hooks);

  test('test helpers', async function(assert) {

    await render(hbs`{{copy-n-status}}`);

    assert.dom('.status__text').hasText('N/A', 'status is initially N/A');

    triggerCopySuccess();

    assert.dom('.status__text').hasText('Success', 'status is now success');

    triggerCopyError();

    assert.dom('.status__text').hasText('Error', 'status is now error');
  });
});
