import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpRedEu from './sku-xx890-op-red-eu';

describe(`with skuXx890OpRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuXx890OpRedEu preset`, () => {
    const skuXx890OpRedEuPreset =
      skuXx890OpRedEu().build<TInventoryEntryDraft>();
    expect(skuXx890OpRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpRedEu preset when built for graphql`, () => {
    const skuXx890OpRedEuPresetGraphql =
      skuXx890OpRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
