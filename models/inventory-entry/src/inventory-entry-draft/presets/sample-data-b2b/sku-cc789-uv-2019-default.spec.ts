import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2019Default from './sku-cc789-uv-2019-default';

describe(`with skuCc789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuCc789Uv2019Default preset`, () => {
    const skuCc789Uv2019DefaultPreset =
      skuCc789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019Default preset when built for graphql`, () => {
    const skuCc789Uv2019DefaultPresetGraphql =
      skuCc789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
