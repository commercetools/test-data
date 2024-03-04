import type { TInventoryEntryDraft } from '../../../types';
import skuOilFilterDefault from './sku-oil-filter-default';

describe(`with skuOilFilterDefault preset and default-warehouse channel`, () => {
  it(`should return a skuOilFilterDefault preset`, () => {
    const skuOilFilterDefaultPreset =
      skuOilFilterDefault().build<TInventoryEntryDraft>();
    expect(skuOilFilterDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOilFilterDefault preset when built for graphql`, () => {
    const skuOilFilterDefaultPresetGraphql =
      skuOilFilterDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuOilFilterDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oil-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
