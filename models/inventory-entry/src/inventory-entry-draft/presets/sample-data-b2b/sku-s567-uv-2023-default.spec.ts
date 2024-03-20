import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2023Default from './sku-s567-uv-2023-default';

describe(`with skuS567Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuS567Uv2023Default preset`, () => {
    const skuS567Uv2023DefaultPreset =
      skuS567Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuS567Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2023Default preset when built for graphql`, () => {
    const skuS567Uv2023DefaultPresetGraphql =
      skuS567Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
