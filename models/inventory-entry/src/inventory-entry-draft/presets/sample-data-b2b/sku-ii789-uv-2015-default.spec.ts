import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2015Default from './sku-ii789-uv-2015-default';

describe(`with skuIi789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuIi789Uv2015Default preset`, () => {
    const skuIi789Uv2015DefaultPreset =
      skuIi789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIi789Uv2015Default preset when built for graphql`, () => {
    const skuIi789Uv2015DefaultPresetGraphql =
      skuIi789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
