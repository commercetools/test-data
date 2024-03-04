import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpRedEu from './sku-ddd890-op-red-eu';

describe(`with skuDdd890OpRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuDdd890OpRedEu preset`, () => {
    const skuDdd890OpRedEuPreset =
      skuDdd890OpRedEu().build<TInventoryEntryDraft>();
    expect(skuDdd890OpRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpRedEu preset when built for graphql`, () => {
    const skuDdd890OpRedEuPresetGraphql =
      skuDdd890OpRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
