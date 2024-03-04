import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvGreenUs from './sku-uu789-uv-green-us';

describe(`with skuUu789UvGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuUu789UvGreenUs preset`, () => {
    const skuUu789UvGreenUsPreset =
      skuUu789UvGreenUs().build<TInventoryEntryDraft>();
    expect(skuUu789UvGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvGreenUs preset when built for graphql`, () => {
    const skuUu789UvGreenUsPresetGraphql =
      skuUu789UvGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
