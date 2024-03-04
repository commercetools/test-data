import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvRedDefault from './sku-uu789-uv-red-default';

describe(`with skuUu789UvRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuUu789UvRedDefault preset`, () => {
    const skuUu789UvRedDefaultPreset =
      skuUu789UvRedDefault().build<TInventoryEntryDraft>();
    expect(skuUu789UvRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvRedDefault preset when built for graphql`, () => {
    const skuUu789UvRedDefaultPresetGraphql =
      skuUu789UvRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
