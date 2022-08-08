import { isPointInsideCircle } from '../is-point-inside-circle';

describe('isPointInsideCircle', () => {
  it('should return false if the point is on or outside the circle', () => {
    const pointOutside1 = { x: 3, y: 3 };
    const pointOutside2 = { x: -3, y: -3 };
    const pointOutside3 = { x: 10, y: 15 };

    const circle = { x: 0, y: 0, radius: 2 };

    expect(isPointInsideCircle(pointOutside1, circle)).toBe(false);
    expect(isPointInsideCircle(pointOutside2, circle)).toBe(false);
    expect(isPointInsideCircle(pointOutside3, circle)).toBe(false);
  });
  it('should return true if the point is inside the circle', () => {
    const pointInside1 = { x: 0, y: 0 };
    const pointInside2 = { x: -1, y: 0 };
    const pointInside3 = { x: 1, y: 0 };
    const pointInside4 = { x: 0, y: -1 };
    const pointInside5 = { x: 0, y: 1 };
    const pointOnCircle1 = { x: -2, y: 0 };
    const pointOnCircle2 = { x: 2, y: 0 };
    const pointOnCircle3 = { x: 0, y: 2 };
    const pointOnCircle4 = { x: 0, y: -2 };

    const circle = { x: 0, y: 0, radius: 2 };

    expect(isPointInsideCircle(pointInside1, circle)).toBe(true);
    expect(isPointInsideCircle(pointInside2, circle)).toBe(true);
    expect(isPointInsideCircle(pointInside3, circle)).toBe(true);
    expect(isPointInsideCircle(pointInside4, circle)).toBe(true);
    expect(isPointInsideCircle(pointInside5, circle)).toBe(true);
    expect(isPointInsideCircle(pointOnCircle1, circle)).toBe(true);
    expect(isPointInsideCircle(pointOnCircle2, circle)).toBe(true);
    expect(isPointInsideCircle(pointOnCircle3, circle)).toBe(true);
    expect(isPointInsideCircle(pointOnCircle4, circle)).toBe(true);
  });
});
