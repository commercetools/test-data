import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2023Default from './sku-ii789-uv-2023-default';

describe(`with skuIi789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuIi789Uv2023Default preset`, () => {
    const skuIi789Uv2023DefaultPreset =
      skuIi789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2023Default preset when built for graphql`, () => {
    const skuIi789Uv2023DefaultPresetGraphql =
      skuIi789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
