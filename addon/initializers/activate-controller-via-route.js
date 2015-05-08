export function initialize(/* container, application */) {
  Ember.Route.reopen({
    setupController: function(controller, model) {
      this._super(controller,model);
      controller.set('active',true);
    },
    activate: function() {
      this._activateController(true);
    },
    deactivate: function() {
      this._activateController(false);
    },
    _activateController: function(isActive) {
      this.controller.set('active',isActive);
    }
  });
}

export default {
  name: 'activate-controller-via-route',
  initialize: initialize
};
