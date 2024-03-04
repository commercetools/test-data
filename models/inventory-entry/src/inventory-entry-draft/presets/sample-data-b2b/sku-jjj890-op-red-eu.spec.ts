import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpRedEu from './sku-jjj890-op-red-eu';

describe(`with skuJjj890OpRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuJjj890OpRedEu preset`, () => {
    const skuJjj890OpRedEuPreset =
      skuJjj890OpRedEu().build<TInventoryEntryDraft>();
    expect(skuJjj890OpRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpRedEu preset when built for graphql`, () => {
    const skuJjj890OpRedEuPresetGraphql =
      skuJjj890OpRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
