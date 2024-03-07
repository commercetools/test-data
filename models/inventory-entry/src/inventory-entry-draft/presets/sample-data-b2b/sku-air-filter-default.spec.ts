import type { TInventoryEntryDraft } from '../../../types';
import skuAirFilterDefault from './sku-air-filter-default';

describe(`with skuAirFilterDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAirFilterDefault preset`, () => {
    const skuAirFilterDefaultPreset =
      skuAirFilterDefault().build<TInventoryEntryDraft>();
    expect(skuAirFilterDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAirFilterDefault preset when built for graphql`, () => {
    const skuAirFilterDefaultPresetGraphql =
      skuAirFilterDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAirFilterDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
