/*
 * Smallest enclosing circle - Library (TypeScript)
 *
 * Copyright (c) 2022 Project Nayuki
 * https://www.nayuki.io/page/smallest-enclosing-circle
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program (see COPYING.txt and COPYING.LESSER.txt).
 * If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Returns the smallest circle that encloses all the given points. Runs in expected O(n) time, randomized.
 * Note: If 0 points are given, null is returned. If 1 point is given, a circle of radius 0 is returned.
 */

import { CircleType, PointType } from 'circle/types';

import { getCircleForOneBoundaryPoint } from './get-circle-for-one-boundary-point';
import { isPointInsideCircle } from './is-point-inside-circle';

// Initially: No boundary points known
export const getMinimumEnclosingCircle = <P extends PointType>(points: Readonly<Array<P>>): CircleType => {
  // Clone list to preserve the caller's data, do Durstenfeld shuffle
  const shuffled: Array<P> = points.slice();
  for (let i = points.length - 1; i >= 0; i -= 1) {
    let j: number = Math.floor(Math.random() * (i + 1));
    j = Math.max(Math.min(j, i), 0);
    const temp: P = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  // Progressively add points to circle or recompute circle
  let c: CircleType | null = null;
  shuffled.forEach((p: PointType, i: number) => {
    if (c === null || !isPointInsideCircle(p, c)) { c = getCircleForOneBoundaryPoint(shuffled.slice(0, i + 1), p); }
  });
  return c ?? { x: 0, y: 0, radius: 0 };
};
