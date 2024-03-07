import type { TInventoryEntryDraft } from '../../../types';
import skuOilFilterDefault from './sku-oil-filter-default';

describe(`with skuOilFilterDefault preset and default-warehouse channel`, () => {
  it(`should return a skuOilFilterDefault preset`, () => {
    const skuOilFilterDefaultPreset =
      skuOilFilterDefault().build<TInventoryEntryDraft>();
    expect(skuOilFilterDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOilFilterDefault preset when built for graphql`, () => {
    const skuOilFilterDefaultPresetGraphql =
      skuOilFilterDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuOilFilterDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
