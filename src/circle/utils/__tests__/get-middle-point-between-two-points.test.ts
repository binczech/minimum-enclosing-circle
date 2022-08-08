import { getMiddlePointBetweenTwoPoints } from '../get-middle-point-between-two-points';

describe('getMiddlePointBetweenTwoPoints', () => {
  it('should return middle point of two points', () => {
    expect(getMiddlePointBetweenTwoPoints(
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    )).toStrictEqual({ x: 1.5, y: 1 });

    expect(getMiddlePointBetweenTwoPoints(
      { x: 5, y: 5 },
      { x: 123, y: 232 },
    )).toStrictEqual({ x: 64, y: 118.5 });
  });
});
