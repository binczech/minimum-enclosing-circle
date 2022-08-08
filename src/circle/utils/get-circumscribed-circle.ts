import { CircleType, PointType } from 'circle/types';

import { getDistanceBetweenPoints } from './get-distance-between-points';

export const getCircumscribedCircle = (a: PointType, b: PointType, c: PointType): CircleType | null => {
  // Mathematical algorithm from Wikipedia: Circumscribed circle
  const ox: number = (Math.min(a.x, b.x, c.x) + Math.max(a.x, b.x, c.x)) / 2;
  const oy: number = (Math.min(a.y, b.y, c.y) + Math.max(a.y, b.y, c.y)) / 2;
  const ax: number = a.x - ox; const ay: number = a.y - oy;
  const bx: number = b.x - ox; const by: number = b.y - oy;
  const cx: number = c.x - ox; const cy: number = c.y - oy;
  const d: number = (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) * 2;
  if (d === 0) { return null; }
  const x: number = ox
      + ((ax * ax + ay * ay) * (by - cy)
        + (bx * bx + by * by) * (cy - ay)
        + (cx * cx + cy * cy) * (ay - by))
        / d;
  const y: number = oy
      + ((ax * ax + ay * ay) * (cx - bx)
        + (bx * bx + by * by) * (ax - cx)
        + (cx * cx + cy * cy) * (bx - ax))
        / d;
  const ra: number = getDistanceBetweenPoints({ x, y }, a);
  const rb: number = getDistanceBetweenPoints({ x, y }, b);
  const rc: number = getDistanceBetweenPoints({ x, y }, c);
  return { x, y, radius: Math.max(ra, rb, rc) };
};
