import type { TReferenceDraft } from '../../../types';
import standalonePriceReference from './standalone-price-reference';

it('should build a standalone-price reference', () => {
  const built =
    standalonePriceReference().build<TReferenceDraft<'standalone-price'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'standalone-price',
  });
});
