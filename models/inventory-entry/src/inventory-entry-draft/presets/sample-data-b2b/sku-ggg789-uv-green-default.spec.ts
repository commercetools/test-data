import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvGreenDefault from './sku-ggg789-uv-green-default';

describe(`with skuGgg789UvGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuGgg789UvGreenDefault preset`, () => {
    const skuGgg789UvGreenDefaultPreset =
      skuGgg789UvGreenDefault().build<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvGreenDefault preset when built for graphql`, () => {
    const skuGgg789UvGreenDefaultPresetGraphql =
      skuGgg789UvGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
