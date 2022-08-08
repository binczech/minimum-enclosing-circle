import { getCircumscribedCircle } from '../get-circumscribed-circle';

describe('getCircumscribedCircle', () => {
  it('should calculate circumscribed circle', () => {
    const circle = getCircumscribedCircle(
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    );
    expect(circle).toStrictEqual({
      x: 0.5,
      y: 0.5,
      radius: 0.7071067811865476,
    });

    const circle1 = getCircumscribedCircle(
      { x: 2, y: 4 },
      { x: 6, y: 2 },
      { x: 5, y: 5 },
    );
    expect(circle1).toStrictEqual({
      x: 4,
      y: 3,
      radius: 2.23606797749979,
    });
  });
});
