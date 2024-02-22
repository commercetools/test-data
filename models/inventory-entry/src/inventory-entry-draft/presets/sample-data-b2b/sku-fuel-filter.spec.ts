import type { TInventoryEntryDraft } from '../../../types';
import skuFuelFilter from './sku-fuel-filter';

describe(`with skuFuelFilter preset`, () => {
  it(`should return a skuFuelFilter preset`, () => {
    const skuFuelFilterPreset = skuFuelFilter().build<TInventoryEntryDraft>();
    expect(skuFuelFilterPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFuelFilter preset when built for graphql`, () => {
    const skuFuelFilterPresetGraphql =
      skuFuelFilter().buildGraphql<TInventoryEntryDraft>();
    expect(skuFuelFilterPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
