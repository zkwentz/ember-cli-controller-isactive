import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('has isActive property', function(assert) {
  var route = this.subject();
  assert.ok(route.controller.isActive);
});
