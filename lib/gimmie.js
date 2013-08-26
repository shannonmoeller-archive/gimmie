/*jshint laxbreak:true */
/**
 * gimmie
 * https://github.com/shannonmoeller/gimmie
 *
 * Copyright (c) 2013 Shannon Moeller
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function gimmie() {
    var args = arguments;
    var i = 0;

    return function () {
        var arg = args[i++];

        return typeof arg === 'function'
             ? arg.apply(this, arguments)
             : arg;
    };
};
