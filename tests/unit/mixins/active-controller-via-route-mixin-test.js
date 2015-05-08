import Ember from 'ember';
import ActiveControllerViaRouteMixinMixin from '../../../mixins/active-controller-via-route-mixin';
import { module, test } from 'qunit';

module('ActiveControllerViaRouteMixinMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ActiveControllerViaRouteMixinObject = Ember.Object.extend(ActiveControllerViaRouteMixinMixin);
  var subject = ActiveControllerViaRouteMixinObject.create();
  assert.ok(subject);
});
