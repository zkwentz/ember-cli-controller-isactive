import Ember from 'ember';
import activateControllerViaRouteMixin from 'ember-cli-controller-isactive/mixins/activate-controller-via-route-mixin';

export function initialize(/* container, application */) {
  Ember.Route.reopen(activateControllerViaRouteMixin,{});
}

export default {
  name: 'activate-controller-via-route',
  initialize: initialize
};
