import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2023Default from './sku-cc789-uv-2023-default';

describe(`with skuCc789Uv2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuCc789Uv2023Default preset`, () => {
    const skuCc789Uv2023DefaultPreset =
      skuCc789Uv2023Default().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2023Default preset when built for graphql`, () => {
    const skuCc789Uv2023DefaultPresetGraphql =
      skuCc789Uv2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
