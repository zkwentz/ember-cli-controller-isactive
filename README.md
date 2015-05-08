# Ember-cli-activated-controller

Ever wanted to know if a controller is currently showing or not? Here's an addon that does that.

## Example

```javascript
  MyController = Ember.Controller.extend({
    activeObserver: (function() {
      if (this.get('active')) {
        console.log('i am currently active');
      } else {
        console.log('i am not active');
      }
    }).observes('active'),
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
