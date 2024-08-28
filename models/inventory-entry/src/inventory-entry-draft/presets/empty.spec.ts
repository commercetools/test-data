import type { TInventoryEntryDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyInventoryEntryDraft = empty().build<TInventoryEntryDraft>();
  expect(emptyInventoryEntryDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyInventoryEntryDraft.supplyChannel).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyInventoryEntryDraft.restockableInDays).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyInventoryEntryDraft.expectedDelivery).toMatchInlineSnapshot(
    `undefined`
  );
});
