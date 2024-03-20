import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvGreenDefault from './sku-aaa789-uv-green-default';

describe(`with skuAaa789UvGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAaa789UvGreenDefault preset`, () => {
    const skuAaa789UvGreenDefaultPreset =
      skuAaa789UvGreenDefault().build<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvGreenDefault preset when built for graphql`, () => {
    const skuAaa789UvGreenDefaultPresetGraphql =
      skuAaa789UvGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
