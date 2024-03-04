import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvGreenDefault from './sku-ggg789-uv-green-default';

describe(`with skuGgg789UvGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuGgg789UvGreenDefault preset`, () => {
    const skuGgg789UvGreenDefaultPreset =
      skuGgg789UvGreenDefault().build<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvGreenDefault preset when built for graphql`, () => {
    const skuGgg789UvGreenDefaultPresetGraphql =
      skuGgg789UvGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
