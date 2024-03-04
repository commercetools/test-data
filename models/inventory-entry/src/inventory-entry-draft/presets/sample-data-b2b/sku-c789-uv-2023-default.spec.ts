import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2023Default from './sku-c789-uv-2023-default';

describe(`with skuC789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuC789Uv2023Default preset`, () => {
    const skuC789Uv2023DefaultPreset =
      skuC789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuC789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2023Default preset when built for graphql`, () => {
    const skuC789Uv2023DefaultPresetGraphql =
      skuC789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
