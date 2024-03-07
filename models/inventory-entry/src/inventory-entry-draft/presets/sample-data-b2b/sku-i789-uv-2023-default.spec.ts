import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2023Default from './sku-i789-uv-2023-default';

describe(`with skuI789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuI789Uv2023Default preset`, () => {
    const skuI789Uv2023DefaultPreset =
      skuI789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuI789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2023Default preset when built for graphql`, () => {
    const skuI789Uv2023DefaultPresetGraphql =
      skuI789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
