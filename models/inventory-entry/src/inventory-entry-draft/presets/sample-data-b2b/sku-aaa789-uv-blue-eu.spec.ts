import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvBlueEu from './sku-aaa789-uv-blue-eu';

describe(`with skuAaa789UvBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuAaa789UvBlueEu preset`, () => {
    const skuAaa789UvBlueEuPreset =
      skuAaa789UvBlueEu().build<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvBlueEu preset when built for graphql`, () => {
    const skuAaa789UvBlueEuPresetGraphql =
      skuAaa789UvBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
