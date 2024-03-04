import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvRedUs from './sku-uu789-uv-red-us';

describe(`with skuUu789UvRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuUu789UvRedUs preset`, () => {
    const skuUu789UvRedUsPreset =
      skuUu789UvRedUs().build<TInventoryEntryDraft>();
    expect(skuUu789UvRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvRedUs preset when built for graphql`, () => {
    const skuUu789UvRedUsPresetGraphql =
      skuUu789UvRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
