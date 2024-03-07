import type { TInventoryEntryDraft } from '../../../types';
import skuOilFilterEu from './sku-oil-filter-eu';

describe(`with skuOilFilterEu preset and eu-warehouse channel`, () => {
  it(`should return a skuOilFilterEu preset`, () => {
    const skuOilFilterEuPreset = skuOilFilterEu().build<TInventoryEntryDraft>();
    expect(skuOilFilterEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOilFilterEu preset when built for graphql`, () => {
    const skuOilFilterEuPresetGraphql =
      skuOilFilterEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuOilFilterEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
