import { getDistanceBetweenPoints } from '../get-distance-between-points';

describe('getDistanceBetweenPoints', () => {
  it('should return the distance between two points', () => {
    const pointA = { x: 1, y: 0 };
    const pointB = { x: 0, y: 0 };
    const pointC = { x: 0, y: 1 };
    const pointD = { x: 0, y: -1 };

    expect(getDistanceBetweenPoints(pointA, pointB)).toBe(1);
    expect(getDistanceBetweenPoints(pointA, pointC)).toBe(1.4142135623730951);
    expect(getDistanceBetweenPoints(pointA, pointD)).toBe(1.4142135623730951);
    expect(getDistanceBetweenPoints(pointB, pointC)).toBe(1);
    expect(getDistanceBetweenPoints(pointB, pointD)).toBe(1);
    expect(getDistanceBetweenPoints(pointC, pointD)).toBe(2);
  });
});
