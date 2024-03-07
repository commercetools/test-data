import type { TInventoryEntryDraft } from '../../../types';
import skuOilFilterUs from './sku-oil-filter-us';

describe(`with skuOilFilterUs preset and us-warehouse channel`, () => {
  it(`should return a skuOilFilterUs preset`, () => {
    const skuOilFilterUsPreset = skuOilFilterUs().build<TInventoryEntryDraft>();
    expect(skuOilFilterUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOilFilterUs preset when built for graphql`, () => {
    const skuOilFilterUsPresetGraphql =
      skuOilFilterUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuOilFilterUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
