# Ember-cli-controller-isactive

Ever wanted to know if a controller is currently showing or not? Here's an addon that does that.

## Example

```javascript
  MyController = Ember.Controller.extend({
    activeObserver: (function() {
      if (this.get('isActive')) {
        console.log('i am currently active');
      } else {
        console.log('i am not active');
      }
    }).observes('isActive'),
    ...
  })
```

## Override 'isActive' property name

If `isActive` conflicts with your app's logic you can override it, by overriding
the `activate-controller-via-route-mixin`:

```javascript

  import activateControllerViaRouteMixin from 'ember-cli-controller-isactive/mixins/activate-controller-via-route-mixin';

  export default activateControllerViaRouteMixin.extend({
    isActive: '_isActive'
  });
```

With this, the example above would look like:

```javascript
  MyController = Ember.Controller.extend({
    activeObserver: (function() {
      if (this.get('_isActive')) {
        console.log('i am currently active');
      } else {
        console.log('i am not active');
      }
    }).observes('_isActive'),
    ...
  })
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.


## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
