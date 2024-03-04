import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2023Default from './sku-oo789-uv-2023-default';

describe(`with skuOo789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuOo789Uv2023Default preset`, () => {
    const skuOo789Uv2023DefaultPreset =
      skuOo789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOo789Uv2023Default preset when built for graphql`, () => {
    const skuOo789Uv2023DefaultPresetGraphql =
      skuOo789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
