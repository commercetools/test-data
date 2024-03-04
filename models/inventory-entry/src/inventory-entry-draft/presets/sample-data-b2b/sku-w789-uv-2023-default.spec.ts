import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2023Default from './sku-w789-uv-2023-default';

describe(`with skuW789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuW789Uv2023Default preset`, () => {
    const skuW789Uv2023DefaultPreset =
      skuW789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuW789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2023Default preset when built for graphql`, () => {
    const skuW789Uv2023DefaultPresetGraphql =
      skuW789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
