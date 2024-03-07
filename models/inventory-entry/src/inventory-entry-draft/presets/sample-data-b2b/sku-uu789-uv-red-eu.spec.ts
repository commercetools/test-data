import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvRedEu from './sku-uu789-uv-red-eu';

describe(`with skuUu789UvRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuUu789UvRedEu preset`, () => {
    const skuUu789UvRedEuPreset =
      skuUu789UvRedEu().build<TInventoryEntryDraft>();
    expect(skuUu789UvRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvRedEu preset when built for graphql`, () => {
    const skuUu789UvRedEuPresetGraphql =
      skuUu789UvRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
