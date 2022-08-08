import { getCrossProduct } from '../get-cross-product';

describe('getCrossProduct', () => {
  it('should calculate cross product', () => {
    const cross = getCrossProduct(
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    );
    expect(cross).toBe(1);

    const cross1 = getCrossProduct(
      { x: 2, y: 4 },
      { x: 3, y: 1 },
      { x: 4, y: 4 },
    );
    expect(cross1).toBe(6);
  });
});
