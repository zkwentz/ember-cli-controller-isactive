import {
  module,
  test
} from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: About', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /about', function(assert) {
  visit('about');

  andThen(function() {
    assert.equal(currentPath(), 'about');
  });
});

test('about is showing', function(assert) {
  visit('/about');

  andThen(function(){
    assert.equal(find('#title').text(), 'About');
  });
});
