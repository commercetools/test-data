import type { TInventoryEntryDraft } from '../../../types';
import skuAirFilterEu from './sku-air-filter-eu';

describe(`with skuAirFilterEu preset and eu-warehouse channel`, () => {
  it(`should return a skuAirFilterEu preset`, () => {
    const skuAirFilterEuPreset = skuAirFilterEu().build<TInventoryEntryDraft>();
    expect(skuAirFilterEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAirFilterEu preset when built for graphql`, () => {
    const skuAirFilterEuPresetGraphql =
      skuAirFilterEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAirFilterEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "air-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
