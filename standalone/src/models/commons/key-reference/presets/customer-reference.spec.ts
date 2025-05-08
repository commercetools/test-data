import type { TKeyReference } from '../types';
import customer from './customer-reference';

it('should build customer reference', () => {
  const built = customer().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'customer',
  });
});
