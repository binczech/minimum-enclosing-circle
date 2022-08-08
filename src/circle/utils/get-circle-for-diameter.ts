import { CircleType, PointType } from 'circle/types';

import { getDistanceBetweenPoints } from './get-distance-between-points';
import { getMiddlePointBetweenTwoPoints } from './get-middle-point-between-two-points';

export const getCircleForDiameter = (point1: PointType, point2: PointType): CircleType => {
  const middlePoint = getMiddlePointBetweenTwoPoints(point1, point2);
  const distance1: number = getDistanceBetweenPoints(middlePoint, point1);
  const distance2: number = getDistanceBetweenPoints(middlePoint, point2);
  return { x: middlePoint.x, y: middlePoint.y, radius: Math.max(distance1, distance2) };
};
