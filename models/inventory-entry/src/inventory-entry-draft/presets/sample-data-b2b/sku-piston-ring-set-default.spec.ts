import type { TInventoryEntryDraft } from '../../../types';
import skuPistonRingSetDefault from './sku-piston-ring-set-default';

describe(`with skuPistonRingSetDefault preset and default-warehouse channel`, () => {
  it(`should return a skuPistonRingSetDefault preset`, () => {
    const skuPistonRingSetDefaultPreset =
      skuPistonRingSetDefault().build<TInventoryEntryDraft>();
    expect(skuPistonRingSetDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetDefault preset when built for graphql`, () => {
    const skuPistonRingSetDefaultPresetGraphql =
      skuPistonRingSetDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuPistonRingSetDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
