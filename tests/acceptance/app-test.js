import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-clipboard-int-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | app');

test('visiting /app', function(assert) {
  assert.expect(3);

  visit('/');
  andThen(() => {
    assert.equal(find('.status__text').text(),
      'N/A',
    'status is initially N/A');
  });

  triggerCopySuccess();

  andThen(() => {
    assert.equal(find('.status__text').text(),
      'Success',
    'status is now success');
  });

  triggerCopyError();

  andThen(() => {
    assert.equal(find('.status__text').text(),
      'Error',
    'status is now error');
  });
});
