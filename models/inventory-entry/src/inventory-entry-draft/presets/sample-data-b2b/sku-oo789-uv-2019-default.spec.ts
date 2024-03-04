import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2019Default from './sku-oo789-uv-2019-default';

describe(`with skuOo789Uv2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuOo789Uv2019Default preset`, () => {
    const skuOo789Uv2019DefaultPreset =
      skuOo789Uv2019Default().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2019Default preset when built for graphql`, () => {
    const skuOo789Uv2019DefaultPresetGraphql =
      skuOo789Uv2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
