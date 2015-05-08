export function initialize(/* container, application */) {
  Ember.Route.reopen({
    controllerAvailable: false,
    setupController: function(controller, model) {
      this._super(controller,model);
      if (!controller.isGenerated) {
        this.set('controllerAvailable',true);
        controller.set('isActive',true);
      }
    },
    activate: function() {
      this._activateController(true);
    },
    deactivate: function() {
      this._activateController(false);
    },
    _activateController: function(isActive) {
      if (this.get('controllerAvailable')) {
        this.controller.set('isActive',isActive);
      }
    }
  });
}

export default {
  name: 'activate-controller-via-route',
  initialize: initialize
};
