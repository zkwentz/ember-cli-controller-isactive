import {
  module,
  test
} from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Generated', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /generated', function(assert) {
  visit('generated');

  andThen(function() {
    assert.equal(currentPath(), 'generated');
  });
});

test('generated isnt showing', function(assert) {
  visit('/generated');

  andThen(function(){
    assert.notEqual(find('#title').text(), 'generated');
  });
});
