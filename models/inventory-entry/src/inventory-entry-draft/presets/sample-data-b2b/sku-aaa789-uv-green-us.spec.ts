import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvGreenUs from './sku-aaa789-uv-green-us';

describe(`with skuAaa789UvGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuAaa789UvGreenUs preset`, () => {
    const skuAaa789UvGreenUsPreset =
      skuAaa789UvGreenUs().build<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvGreenUs preset when built for graphql`, () => {
    const skuAaa789UvGreenUsPresetGraphql =
      skuAaa789UvGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
