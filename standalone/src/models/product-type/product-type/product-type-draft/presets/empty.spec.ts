import type { TProductTypeDraft } from '../../types';
import empty from './empty';

it(`should set key and attributes fields to undefined`, () => {
  const emptyProductTypeDraft = empty().build<TProductTypeDraft>();
  expect(emptyProductTypeDraft).toEqual({
    key: undefined,
    name: expect.any(String),
    description: expect.any(String),
    attributes: undefined,
  });
});
