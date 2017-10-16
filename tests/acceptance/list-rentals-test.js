import { test } from 'qunit';
import moduleForAcceptance from 'emberjs-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
// test('visiting /list-rentals', function(assert) {
//   visit('/list-rentals');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/list-rentals');
//   });
// });
