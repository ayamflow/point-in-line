point-in-line
===

Returns a point at length `t` on a given line (two points).

`A ----t-------B`

## Installation

`npm i point-in-line --save`

## Usage

`pointInLine(p1, p1, t)`

p1, p2 are point. It can be any object as long as it has `.x` and `.y` properties.
t is a float. Between 0 and 1, the point will be between p1 and p2.

## Exemple

```js
  var pointInLine = require('point-in-line');
  var center = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5
  };

  var p = {
    x: 127,
    y: 43
  };

  var p1 = pointInLine(center, p, 0.5); // Point at 50% of the line
  var p2 = pointInLine(p, center, 2); // point at twice the length of the line
  ```