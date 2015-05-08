import Ember from 'ember';

export default Ember.Mixin.create({
    // Override this to prevent conflicts with your app
    isActive: 'isActive',
    controllerAvailable: false,
    setupController: function(controller, model) {
      this._super(controller,model);
      if (!controller.isGenerated) {
        this.set('controllerAvailable',true);
        controller.set(this.get('isActive'),true);
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
        this.controller.set(this.get('isActive'),isActive);
      }
    }
 });
