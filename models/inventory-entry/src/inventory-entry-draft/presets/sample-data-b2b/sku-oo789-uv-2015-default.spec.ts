import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2015Default from './sku-oo789-uv-2015-default';

describe(`with skuOo789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuOo789Uv2015Default preset`, () => {
    const skuOo789Uv2015DefaultPreset =
      skuOo789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOo789Uv2015Default preset when built for graphql`, () => {
    const skuOo789Uv2015DefaultPresetGraphql =
      skuOo789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
