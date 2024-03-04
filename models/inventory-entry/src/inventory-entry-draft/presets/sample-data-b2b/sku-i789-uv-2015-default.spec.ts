import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2015Default from './sku-i789-uv-2015-default';

describe(`with skuI789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuI789Uv2015Default preset`, () => {
    const skuI789Uv2015DefaultPreset =
      skuI789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuI789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2015Default preset when built for graphql`, () => {
    const skuI789Uv2015DefaultPresetGraphql =
      skuI789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
