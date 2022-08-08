import { CircleType, PointType } from 'circle/types';

import { getCircleForDiameter } from './get-circle-for-diameter';
import { getCircleForTwoBoundaryPoints } from './get-circle-for-two-boundary-points';
import { isPointInsideCircle } from './is-point-inside-circle';

// One boundary point known
export const getCircleForOneBoundaryPoint = (points: Array<PointType>, point: PointType): CircleType => {
  let circle: CircleType = { x: point.x, y: point.y, radius: 0 };
  points.forEach((p: PointType, i: number) => {
    if (!isPointInsideCircle(p, circle)) {
      if (circle.radius === 0) {
        circle = getCircleForDiameter(point, p);
      } else {
        circle = getCircleForTwoBoundaryPoints(points.slice(0, i + 1), point, p);
      }
    }
  });
  return circle;
};
