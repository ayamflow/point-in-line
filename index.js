'use strict';

/**
 * return the point positionned at {t}% of the line
 * @param  {point} start    start point of the line
 * @param  {point} end      end point of the line
 * @param  {float} t        distance of the point between 0 and 1
 * @return {point}
 */
module.exports = function(start, end, t) {
  return {
    x: start.x + t * (end.x - start.x),
    y: start.y + t * (end.y - start.y)
  };
};
