'use strict';

var test = require('tape');
var pointInLine = require('../index.js');

var line = {
    start: {
        x: 0,
        y: 0
    },
    end: {
        x: 10,
        y: 10
    }
};

var lineNeg = {
    start: {
        x: -10,
        y: -10
    },
    end: {
        x: 10,
        y: 10
    }
};

test('Testing positive distance', function(assert) {
    assert.deepEqual(pointInLine(line.start, line.end, 0), line.start);
    assert.deepEqual(pointInLine(line.start, line.end, 1), line.end);
    assert.deepEqual(pointInLine(line.start, line.end, 0.5), {x: 5, y: 5});

    assert.end();
});

test('Testing negative distance', function(assert) {
    assert.deepEqual(pointInLine(lineNeg.start, lineNeg.end, 0), lineNeg.start);
    assert.deepEqual(pointInLine(lineNeg.start, lineNeg.end, 1), lineNeg.end);
    assert.deepEqual(pointInLine(lineNeg.start, lineNeg.end, 0.5), {x: 0, y: 0});

    assert.end();
});