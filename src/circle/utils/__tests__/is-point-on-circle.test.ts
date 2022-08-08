import { isPointOnCircle } from '../is-point-on-circle';

describe('isPointOnCircle', () => {
  it('should return false if the point is inside or outside the circle', () => {
    const pointInside = { x: 0, y: 0 };
    const pointOutside = { x: 3, y: 3 };

    const circle = { x: 0, y: 0, radius: 2 };

    expect(isPointOnCircle(pointInside, circle)).toBe(false);
    expect(isPointOnCircle(pointOutside, circle)).toBe(false);
  });
  it('should return true if the point is on the circle', () => {
    const pointOnCircle1 = { x: -2, y: 0 };
    const pointOnCircle2 = { x: 2, y: 0 };
    const pointOnCircle3 = { x: 0, y: 2 };
    const pointOnCircle4 = { x: 0, y: -2 };

    const circle = { x: 0, y: 0, radius: 2 };

    expect(isPointOnCircle(pointOnCircle1, circle)).toBe(true);
    expect(isPointOnCircle(pointOnCircle2, circle)).toBe(true);
    expect(isPointOnCircle(pointOnCircle3, circle)).toBe(true);
    expect(isPointOnCircle(pointOnCircle4, circle)).toBe(true);
  });
});
