import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpBlueEu from './sku-xx890-op-blue-eu';

describe(`with skuXx890OpBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuXx890OpBlueEu preset`, () => {
    const skuXx890OpBlueEuPreset =
      skuXx890OpBlueEu().build<TInventoryEntryDraft>();
    expect(skuXx890OpBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpBlueEu preset when built for graphql`, () => {
    const skuXx890OpBlueEuPresetGraphql =
      skuXx890OpBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
