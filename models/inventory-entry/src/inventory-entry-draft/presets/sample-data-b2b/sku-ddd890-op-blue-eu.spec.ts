import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpBlueEu from './sku-ddd890-op-blue-eu';

describe(`with skuDdd890OpBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuDdd890OpBlueEu preset`, () => {
    const skuDdd890OpBlueEuPreset =
      skuDdd890OpBlueEu().build<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpBlueEu preset when built for graphql`, () => {
    const skuDdd890OpBlueEuPresetGraphql =
      skuDdd890OpBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
