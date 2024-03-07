import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvBlueDefault from './sku-uu789-uv-blue-default';

describe(`with skuUu789UvBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuUu789UvBlueDefault preset`, () => {
    const skuUu789UvBlueDefaultPreset =
      skuUu789UvBlueDefault().build<TInventoryEntryDraft>();
    expect(skuUu789UvBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvBlueDefault preset when built for graphql`, () => {
    const skuUu789UvBlueDefaultPresetGraphql =
      skuUu789UvBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
