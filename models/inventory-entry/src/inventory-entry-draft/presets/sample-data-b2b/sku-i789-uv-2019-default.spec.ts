import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2019Default from './sku-i789-uv-2019-default';

describe(`with skuI789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuI789Uv2019Default preset`, () => {
    const skuI789Uv2019DefaultPreset =
      skuI789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuI789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2019Default preset when built for graphql`, () => {
    const skuI789Uv2019DefaultPresetGraphql =
      skuI789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
