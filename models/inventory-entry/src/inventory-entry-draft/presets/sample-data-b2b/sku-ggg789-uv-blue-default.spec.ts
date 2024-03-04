import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvBlueDefault from './sku-ggg789-uv-blue-default';

describe(`with skuGgg789UvBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuGgg789UvBlueDefault preset`, () => {
    const skuGgg789UvBlueDefaultPreset =
      skuGgg789UvBlueDefault().build<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvBlueDefault preset when built for graphql`, () => {
    const skuGgg789UvBlueDefaultPresetGraphql =
      skuGgg789UvBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
