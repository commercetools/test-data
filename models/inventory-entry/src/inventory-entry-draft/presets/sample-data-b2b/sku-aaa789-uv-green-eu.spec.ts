import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvGreenEu from './sku-aaa789-uv-green-eu';

describe(`with skuAaa789UvGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuAaa789UvGreenEu preset`, () => {
    const skuAaa789UvGreenEuPreset =
      skuAaa789UvGreenEu().build<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvGreenEu preset when built for graphql`, () => {
    const skuAaa789UvGreenEuPresetGraphql =
      skuAaa789UvGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
