import {
  module,
  test
} from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Posts', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentPath(), 'posts');
  });
});

test('posts is showing', function(assert) {
  visit('/posts');

  andThen(function(){
    assert.equal(find('#title').text(), 'Posts');
  });
});
