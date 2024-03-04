import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2015Default from './sku-w789-uv-2015-default';

describe(`with skuW789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuW789Uv2015Default preset`, () => {
    const skuW789Uv2015DefaultPreset =
      skuW789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuW789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2015Default preset when built for graphql`, () => {
    const skuW789Uv2015DefaultPresetGraphql =
      skuW789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
