import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  navigationTitle: Ember.computed.alias('controllers.application.navigationTitle'),
  isActiveObserver: Ember.observer('isActive', function() {
    this.set('navigationTitle','Posts');
  })
});
