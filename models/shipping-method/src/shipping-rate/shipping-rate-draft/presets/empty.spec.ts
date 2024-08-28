import type { TShippingRateDraftBuilder } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyShippingRateDraft = empty().build<TShippingRateDraftBuilder>();
  expect(emptyShippingRateDraft.freeAbove).toMatchInlineSnapshot(`undefined`);
  expect(emptyShippingRateDraft.tiers).toMatchInlineSnapshot(`undefined`);
});
