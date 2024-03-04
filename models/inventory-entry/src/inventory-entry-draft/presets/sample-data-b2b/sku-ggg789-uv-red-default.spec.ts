import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvRedDefault from './sku-ggg789-uv-red-default';

describe(`with skuGgg789UvRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuGgg789UvRedDefault preset`, () => {
    const skuGgg789UvRedDefaultPreset =
      skuGgg789UvRedDefault().build<TInventoryEntryDraft>();
    expect(skuGgg789UvRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvRedDefault preset when built for graphql`, () => {
    const skuGgg789UvRedDefaultPresetGraphql =
      skuGgg789UvRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
