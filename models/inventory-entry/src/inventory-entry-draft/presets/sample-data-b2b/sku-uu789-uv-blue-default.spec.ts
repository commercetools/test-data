import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvBlueDefault from './sku-uu789-uv-blue-default';

describe(`with skuUu789UvBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuUu789UvBlueDefault preset`, () => {
    const skuUu789UvBlueDefaultPreset =
      skuUu789UvBlueDefault().build<TInventoryEntryDraft>();
    expect(skuUu789UvBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvBlueDefault preset when built for graphql`, () => {
    const skuUu789UvBlueDefaultPresetGraphql =
      skuUu789UvBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
