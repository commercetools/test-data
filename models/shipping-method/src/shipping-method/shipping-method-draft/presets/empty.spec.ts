import type { TShippingMethodDraftBuilder } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyShippingMethodDraft = empty().build<TShippingMethodDraftBuilder>();
  expect(emptyShippingMethodDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyShippingMethodDraft.localizedName).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyShippingMethodDraft.localizedDescription).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyShippingMethodDraft.predicate).toMatchInlineSnapshot(`undefined`);
  expect(emptyShippingMethodDraft.custom).toMatchInlineSnapshot(`undefined`);
});
