import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvBlueUs from './sku-uu789-uv-blue-us';

describe(`with skuUu789UvBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuUu789UvBlueUs preset`, () => {
    const skuUu789UvBlueUsPreset =
      skuUu789UvBlueUs().build<TInventoryEntryDraft>();
    expect(skuUu789UvBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvBlueUs preset when built for graphql`, () => {
    const skuUu789UvBlueUsPresetGraphql =
      skuUu789UvBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
