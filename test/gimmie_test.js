'use strict';

var gimmie = require('../lib/gimmie');

exports.gimmie = {
    'no args': function(test) {
        test.expect(2);

        var next = gimmie();

        test.equal(next(), undefined, 'should be undefined');
        test.equal(next(), undefined, 'should be undefined');

        test.done();
    },

    'simple args': function(test) {
        test.expect(8);

        var next = gimmie('a', 'b', 'c', 1, 2, 3);

        test.equal(next(), 'a', 'should be string');
        test.equal(next(), 'b', 'should be string');
        test.equal(next(), 'c', 'should be string');
        test.equal(next(), 1, 'should be number');
        test.equal(next(), 2, 'should be number');
        test.equal(next(), 3, 'should be number');
        test.equal(next(), undefined, 'should be undefined');
        test.equal(next(), undefined, 'should be undefined');

        test.done();
    },

    'function args': function(test) {
        test.expect(4);

        var next = gimmie(
            function (val) { return 'a' + val; },
            function (val) { return 1 + val; },
            function (val) { test.ok(val); return val; }
        );

        test.equal(next(1), 'a1', 'should be concatenated string');
        test.equal(next(1), 2, 'should be calculated number');
        test.equal(next(1), 1, 'should be passed value');

        test.done();
    },

    'mixed args': function(test) {
        test.expect(4);

        var next = gimmie(
            'foo',
            123,
            function (val) { test.ok(val); return val; }
        );

        test.equal(next(1), 'foo', 'should be unmodified string');
        test.equal(next(1), 123, 'should be unmodified number');
        test.equal(next(1), 1, 'should be passed value');

        test.done();
    }
};
