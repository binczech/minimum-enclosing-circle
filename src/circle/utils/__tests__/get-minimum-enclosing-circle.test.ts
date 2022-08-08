import { getMinimumEnclosingCircle } from '../get-minimum-enclosing-circle';

describe('getMinimumEnclosingCircle', () => {
  it('should return the minimum enclosing circle', () => {
    const points = [
      { x: 5, y: -2 },
      { x: -3, y: -2 },
      { x: -2, y: 5 },
      { x: 1, y: 6 },
      { x: 0, y: 2 },
    ];

    const circle = getMinimumEnclosingCircle(points);

    expect(circle.x).toBe(1);
    expect(circle.y).toBe(1);
    expect(circle.radius).toBe(5);

    const points1 = [
      { x: 65, y: 43 },
      { x: 96, y: 12 },
      { x: 12, y: 54 },
      { x: 23, y: 12 },
      { x: 23, y: 65 },
    ];

    const circle1 = getMinimumEnclosingCircle(points1);

    expect(circle1.x).toBe(54);
    expect(circle1.y).toBe(33);
    expect(circle1.radius).toBe(46.95742752749558);
  });
});
