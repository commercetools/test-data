import type { TProductVariantDraft } from '../../types';
import empty from './empty';

it(`should set all fields to undefined`, () => {
  const emptyProductVariantDraft = empty().build<TProductVariantDraft>();
  expect(emptyProductVariantDraft).toMatchInlineSnapshot(`
    {
      "assets": undefined,
      "attributes": undefined,
      "images": undefined,
      "key": undefined,
      "prices": undefined,
      "sku": undefined,
    }
  `);
});
