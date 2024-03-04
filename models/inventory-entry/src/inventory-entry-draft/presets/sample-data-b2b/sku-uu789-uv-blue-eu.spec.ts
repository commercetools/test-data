import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvBlueEu from './sku-uu789-uv-blue-eu';

describe(`with skuUu789UvBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuUu789UvBlueEu preset`, () => {
    const skuUu789UvBlueEuPreset =
      skuUu789UvBlueEu().build<TInventoryEntryDraft>();
    expect(skuUu789UvBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvBlueEu preset when built for graphql`, () => {
    const skuUu789UvBlueEuPresetGraphql =
      skuUu789UvBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
