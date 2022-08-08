import { PointType } from 'circle/types';

export const getMiddlePointBetweenTwoPoints = (point1: PointType, point2: PointType): PointType => ({
  x: (point1.x + point2.x) / 2,
  y: (point1.y + point2.y) / 2,
});
