import type { TImageDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyPriceDraft = empty().build<TImageDraft>();

  expect(emptyPriceDraft).toMatchObject({
    label: undefined,
    dimensions: {
      h: expect.any(Number),
      w: expect.any(Number),
    },
    url: expect.any(String),
  });
});
