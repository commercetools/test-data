import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvGreenDefault from './sku-uu789-uv-green-default';

describe(`with skuUu789UvGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuUu789UvGreenDefault preset`, () => {
    const skuUu789UvGreenDefaultPreset =
      skuUu789UvGreenDefault().build<TInventoryEntryDraft>();
    expect(skuUu789UvGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvGreenDefault preset when built for graphql`, () => {
    const skuUu789UvGreenDefaultPresetGraphql =
      skuUu789UvGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
