import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpBlueEu from './sku-jjj890-op-blue-eu';

describe(`with skuJjj890OpBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuJjj890OpBlueEu preset`, () => {
    const skuJjj890OpBlueEuPreset =
      skuJjj890OpBlueEu().build<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpBlueEu preset when built for graphql`, () => {
    const skuJjj890OpBlueEuPresetGraphql =
      skuJjj890OpBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
