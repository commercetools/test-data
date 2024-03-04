import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2019Default from './sku-w789-uv-2019-default';

describe(`with skuW789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuW789Uv2019Default preset`, () => {
    const skuW789Uv2019DefaultPreset =
      skuW789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuW789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2019Default preset when built for graphql`, () => {
    const skuW789Uv2019DefaultPresetGraphql =
      skuW789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
