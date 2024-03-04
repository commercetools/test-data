import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvRedDefault from './sku-aaa789-uv-red-default';

describe(`with skuAaa789UvRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAaa789UvRedDefault preset`, () => {
    const skuAaa789UvRedDefaultPreset =
      skuAaa789UvRedDefault().build<TInventoryEntryDraft>();
    expect(skuAaa789UvRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvRedDefault preset when built for graphql`, () => {
    const skuAaa789UvRedDefaultPresetGraphql =
      skuAaa789UvRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
