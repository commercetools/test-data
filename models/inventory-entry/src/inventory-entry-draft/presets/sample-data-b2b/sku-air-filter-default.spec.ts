import type { TInventoryEntryDraft } from '../../../types';
import skuAirFilterDefault from './sku-air-filter-default';

describe(`with skuAirFilterDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAirFilterDefault preset`, () => {
    const skuAirFilterDefaultPreset =
      skuAirFilterDefault().build<TInventoryEntryDraft>();
    expect(skuAirFilterDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAirFilterDefault preset when built for graphql`, () => {
    const skuAirFilterDefaultPresetGraphql =
      skuAirFilterDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAirFilterDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
