import { CircleType, PointType } from 'circle/types';

import { getCircleForDiameter } from './get-circle-for-diameter';
import { getCircumscribedCircle } from './get-circumscribed-circle';
import { getCrossProduct } from './get-cross-product';
import { isPointInsideCircle } from './is-point-inside-circle';

// Two boundary points known
export const getCircleForTwoBoundaryPoints = (
  points: Array<PointType>,
  p: PointType,
  q: PointType,
): CircleType => {
  const circle: CircleType = getCircleForDiameter(p, q);
  let left : CircleType | null = null;
  let right: CircleType | null = null;

  // For each point not in the two-point circle
  // eslint-disable-next-line no-restricted-syntax
  for (const r of points) {
    // eslint-disable-next-line no-continue
    if (isPointInsideCircle(r, circle)) continue;

    // Form a circumcircle and classify it on left or right side
    const cross: number = getCrossProduct(p, q, r);
    const c: CircleType | null = getCircumscribedCircle(p, q, r);
    // eslint-disable-next-line no-continue
    if (c === null) continue;
    else if (
      cross > 0
      && (left === null
        || getCrossProduct(p, q, c)
          > getCrossProduct(p, q, left))
    ) { left = c; } else if (
      cross < 0
      && (right === null
        || getCrossProduct(p, q, c)
          < getCrossProduct(p, q, right))
    ) { right = c; }
  }

  // Select which circle to return
  if (left === null && right === null) return circle;
  if (left === null && right !== null) return right;
  if (left !== null && right === null) return left;
  if (left !== null && right !== null) return left.radius <= right.radius ? left : right;
  throw new Error('Assertion error');
};
