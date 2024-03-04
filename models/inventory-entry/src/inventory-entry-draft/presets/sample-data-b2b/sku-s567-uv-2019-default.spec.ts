import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2019Default from './sku-s567-uv-2019-default';

describe(`with skuS567Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuS567Uv2019Default preset`, () => {
    const skuS567Uv2019DefaultPreset =
      skuS567Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuS567Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2019Default preset when built for graphql`, () => {
    const skuS567Uv2019DefaultPresetGraphql =
      skuS567Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
