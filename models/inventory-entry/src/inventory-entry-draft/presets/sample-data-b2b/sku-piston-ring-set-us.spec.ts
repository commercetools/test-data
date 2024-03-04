import type { TInventoryEntryDraft } from '../../../types';
import skuPistonRingSetUs from './sku-piston-ring-set-us';

describe(`with skuPistonRingSetUs preset and us-warehouse channel`, () => {
  it(`should return a skuPistonRingSetUs preset`, () => {
    const skuPistonRingSetUsPreset =
      skuPistonRingSetUs().build<TInventoryEntryDraft>();
    expect(skuPistonRingSetUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPistonRingSetUs preset when built for graphql`, () => {
    const skuPistonRingSetUsPresetGraphql =
      skuPistonRingSetUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuPistonRingSetUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": undefined,
      }
    `);
  });
});
