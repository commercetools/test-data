import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2019Default from './sku-ii789-uv-2019-default';

describe(`with skuIi789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuIi789Uv2019Default preset`, () => {
    const skuIi789Uv2019DefaultPreset =
      skuIi789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2019Default preset when built for graphql`, () => {
    const skuIi789Uv2019DefaultPresetGraphql =
      skuIi789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
