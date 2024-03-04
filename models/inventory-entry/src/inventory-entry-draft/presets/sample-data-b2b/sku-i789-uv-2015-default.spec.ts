import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2015Default from './sku-i789-uv-2015-default';

describe(`with skuI789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuI789Uv2015Default preset`, () => {
    const skuI789Uv2015DefaultPreset =
      skuI789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuI789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2015Default preset when built for graphql`, () => {
    const skuI789Uv2015DefaultPresetGraphql =
      skuI789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
