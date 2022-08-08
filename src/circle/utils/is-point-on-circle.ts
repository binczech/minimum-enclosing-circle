import { CircleType, PointType } from '../types';
import { getDistanceBetweenPoints } from './get-distance-between-points';

export const isPointOnCircle = (
  point: PointType,
  { radius, x, y }: CircleType,
): boolean => getDistanceBetweenPoints(point, { x, y }) === radius;
