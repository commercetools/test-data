import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2015Default from './sku-cc789-uv-2015-default';

describe(`with skuCc789Uv2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuCc789Uv2015Default preset`, () => {
    const skuCc789Uv2015DefaultPreset =
      skuCc789Uv2015Default().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2015Default preset when built for graphql`, () => {
    const skuCc789Uv2015DefaultPresetGraphql =
      skuCc789Uv2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
