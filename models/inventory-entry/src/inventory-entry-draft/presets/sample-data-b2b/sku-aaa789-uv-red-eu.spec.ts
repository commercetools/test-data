import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvRedEu from './sku-aaa789-uv-red-eu';

describe(`with skuAaa789UvRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuAaa789UvRedEu preset`, () => {
    const skuAaa789UvRedEuPreset =
      skuAaa789UvRedEu().build<TInventoryEntryDraft>();
    expect(skuAaa789UvRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedEu preset when built for graphql`, () => {
    const skuAaa789UvRedEuPresetGraphql =
      skuAaa789UvRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
