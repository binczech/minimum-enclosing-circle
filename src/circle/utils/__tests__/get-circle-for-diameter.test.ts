import { getCircleForDiameter } from '../get-circle-for-diameter';

describe('getCircleForDiameter', () => {
  it('should return circle for two boundary points', () => {
    expect(getCircleForDiameter(
      { x: 1, y: 1 },
      { x: 3, y: 1 },
    )).toStrictEqual({ x: 2, y: 1, radius: 1 });
    expect(getCircleForDiameter(
      { x: 123, y: 122 },
      { x: 23, y: 234 },
    )).toStrictEqual({ x: 73, y: 178, radius: 75.07329751649384 });
  });
});
