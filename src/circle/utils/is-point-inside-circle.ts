import { isNull } from 'lodash/fp';

import { MULTIPLICATIVE_EPSILON } from '../consts';
import { CircleType, PointType } from '../types';
import { getDistanceBetweenPoints } from './get-distance-between-points';

export const isPointInsideCircle = (
  point: PointType | null,
  { radius, x, y }: CircleType,
): boolean => !isNull(point) && getDistanceBetweenPoints(point, { x, y }) <= radius * MULTIPLICATIVE_EPSILON;
