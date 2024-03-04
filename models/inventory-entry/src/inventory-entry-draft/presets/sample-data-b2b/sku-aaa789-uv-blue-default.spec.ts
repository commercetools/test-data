import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvBlueDefault from './sku-aaa789-uv-blue-default';

describe(`with skuAaa789UvBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAaa789UvBlueDefault preset`, () => {
    const skuAaa789UvBlueDefaultPreset =
      skuAaa789UvBlueDefault().build<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueDefault preset when built for graphql`, () => {
    const skuAaa789UvBlueDefaultPresetGraphql =
      skuAaa789UvBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
