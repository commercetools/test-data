import type { TInventoryEntryDraft } from '../../../types';
import skuPistonRingSet from './sku-piston-ring-set';

describe(`with skuPistonRingSet preset`, () => {
  it(`should return a skuPistonRingSet preset`, () => {
    const skuPistonRingSetPreset =
      skuPistonRingSet().build<TInventoryEntryDraft>();
    expect(skuPistonRingSetPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPistonRingSet preset when built for graphql`, () => {
    const skuPistonRingSetPresetGraphql =
      skuPistonRingSet().buildGraphql<TInventoryEntryDraft>();
    expect(skuPistonRingSetPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": undefined,
      }
    `);
  });
});
