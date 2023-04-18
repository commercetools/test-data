import type { TProductTypeDraft } from '../../types';
import empty from './empty';

it(`should set key and attributes fields to undefined`, () => {
  const emptyProductType = empty().build<TProductTypeDraft>();
  expect(emptyProductType).toEqual({
    key: undefined,
    name: expect.any(String),
    description: expect.any(String),
    attributes: undefined,
  });
});
