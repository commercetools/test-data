import type { TInventoryEntryDraft } from '../../../types';
import skuAirFilterUs from './sku-air-filter-us';

describe(`with skuAirFilterUs preset and us-warehouse channel`, () => {
  it(`should return a skuAirFilterUs preset`, () => {
    const skuAirFilterUsPreset = skuAirFilterUs().build<TInventoryEntryDraft>();
    expect(skuAirFilterUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAirFilterUs preset when built for graphql`, () => {
    const skuAirFilterUsPresetGraphql =
      skuAirFilterUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuAirFilterUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
