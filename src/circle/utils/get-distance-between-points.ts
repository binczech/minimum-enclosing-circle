import { PointType } from 'circle/types';

export const getDistanceBetweenPoints = (
  pointA: PointType,
  pointB: PointType,
): number => Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
