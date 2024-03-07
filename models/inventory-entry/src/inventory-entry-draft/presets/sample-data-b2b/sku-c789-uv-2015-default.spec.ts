import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2015Default from './sku-c789-uv-2015-default';

describe(`with skuC789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuC789Uv2015Default preset`, () => {
    const skuC789Uv2015DefaultPreset =
      skuC789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuC789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2015Default preset when built for graphql`, () => {
    const skuC789Uv2015DefaultPresetGraphql =
      skuC789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
