import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('has isActive property', function(assert) {
  var controller = this.subject();
  assert.ok(controller.isActive);
});
