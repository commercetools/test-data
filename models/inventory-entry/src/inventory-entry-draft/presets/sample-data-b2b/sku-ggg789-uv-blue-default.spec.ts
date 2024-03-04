import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvBlueDefault from './sku-ggg789-uv-blue-default';

describe(`with skuGgg789UvBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuGgg789UvBlueDefault preset`, () => {
    const skuGgg789UvBlueDefaultPreset =
      skuGgg789UvBlueDefault().build<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvBlueDefault preset when built for graphql`, () => {
    const skuGgg789UvBlueDefaultPresetGraphql =
      skuGgg789UvBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
