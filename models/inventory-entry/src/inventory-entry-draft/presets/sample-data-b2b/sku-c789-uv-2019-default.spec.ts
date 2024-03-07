import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2019Default from './sku-c789-uv-2019-default';

describe(`with skuC789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuC789Uv2019Default preset`, () => {
    const skuC789Uv2019DefaultPreset =
      skuC789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuC789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2019Default preset when built for graphql`, () => {
    const skuC789Uv2019DefaultPresetGraphql =
      skuC789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
