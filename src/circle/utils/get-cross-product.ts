import { PointType } from 'circle/types';

// Returns twice the signed area of the triangle defined by (x0, y0), (x1, y1), (x2, y2).
export const getCrossProduct = (
  point1: PointType,
  point2: PointType,
  point3: PointType,
): number => (point2.x - point1.x) * (point3.y - point1.y) - (point2.y - point1.y) * (point3.x - point1.x);
