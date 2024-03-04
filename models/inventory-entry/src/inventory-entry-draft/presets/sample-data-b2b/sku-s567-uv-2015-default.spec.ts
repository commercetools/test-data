import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2015Default from './sku-s567-uv-2015-default';

describe(`with skuS567Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuS567Uv2015Default preset`, () => {
    const skuS567Uv2015DefaultPreset =
      skuS567Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuS567Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2015Default preset when built for graphql`, () => {
    const skuS567Uv2015DefaultPresetGraphql =
      skuS567Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
