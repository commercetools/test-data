import type { TInventoryEntryDraft } from '../../../types';
import skuAirFilter from './sku-air-filter';

describe(`with skuAirFilter preset`, () => {
  it(`should return a skuAirFilter preset`, () => {
    const skuAirFilterPreset = skuAirFilter().build<TInventoryEntryDraft>();
    expect(skuAirFilterPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAirFilter preset when built for graphql`, () => {
    const skuAirFilterPresetGraphql =
      skuAirFilter().buildGraphql<TInventoryEntryDraft>();
    expect(skuAirFilterPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "air-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
