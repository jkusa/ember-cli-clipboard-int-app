import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  triggerCopyError,
  triggerCopySuccess
} from 'ember-cli-clipboard/test-support';

module('Acceptance | app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /app', async function(assert) {
    assert.expect(3);

    await visit('/');
    assert.dom('.status__text').hasText('N/A', 'status is initially N/A');

    triggerCopySuccess();

    assert.dom('.status__text').hasText('Success', 'status is now success');

    triggerCopyError();

    assert.dom('.status__text').hasText('Error', 'status is now error');
  });
});
