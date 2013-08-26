# gimmie [![Build Status](https://secure.travis-ci.org/shannonmoeller/gimmie.png?branch=master)](http://travis-ci.org/shannonmoeller/gimmie)

The stupid iterator.

## Getting Started

Install the module with: `npm install gimmie`

## Documentation

### `gimmie( Any... ): Function`

Accepts any number of values of any type and returns a function that yields each given value in turn when invoked multiple times.

```javascript

    var gimmie = require('gimmie');

    var next = gimmie(3, 5, 7);

    console.log(next()); // 3
    console.log(next()); // 5
    console.log(next()); // 7
    console.log(next()); // undefined

```

### `gimmie( Function... ): Function`

Accepts any number of functions and returns a function which masquerades as each given function in turn when invoked multiple times. Useful for mocking methods or injecting assertions in tests.

```javascript

    var $ = require('jquery');
    var assert = require('assert');
    var gimmie = require('gimmie');

    var origAjax = $.ajax;

    $.ajax = gimmie(
        function (url) {
            assert.equal(url, 'http://google.com');
            return origAjax.apply($, arguments);
        },
        function (url) {
            assert.equal(url, 'http://github.com');
            return origAjax.apply($, arguments);
        }
    );

    $.ajax('http://google.com').then( ... ); // pass
    $.ajax('http://nodejs.org').then( ... ); // fail

```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 0.1.0: Initial release.

## License

Copyright (c) 2013 Shannon Moeller. Licensed under the MIT license.
