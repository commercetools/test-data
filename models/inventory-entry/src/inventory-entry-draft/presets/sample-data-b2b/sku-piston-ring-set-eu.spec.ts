import type { TInventoryEntryDraft } from '../../../types';
import skuPistonRingSetEu from './sku-piston-ring-set-eu';

describe(`with skuPistonRingSetEu preset and eu-warehouse channel`, () => {
  it(`should return a skuPistonRingSetEu preset`, () => {
    const skuPistonRingSetEuPreset =
      skuPistonRingSetEu().build<TInventoryEntryDraft>();
    expect(skuPistonRingSetEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetEu preset when built for graphql`, () => {
    const skuPistonRingSetEuPresetGraphql =
      skuPistonRingSetEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPistonRingSetEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
