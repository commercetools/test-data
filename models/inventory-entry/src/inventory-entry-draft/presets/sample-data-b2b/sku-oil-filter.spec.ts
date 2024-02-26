import type { TInventoryEntryDraft } from '../../../types';
import skuOilFilter from './sku-oil-filter';

describe(`with skuOilFilter preset`, () => {
  it(`should return a skuOilFilter preset`, () => {
    const skuOilFilterPreset = skuOilFilter().build<TInventoryEntryDraft>();
    expect(skuOilFilterPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOilFilter preset when built for graphql`, () => {
    const skuOilFilterPresetGraphql =
      skuOilFilter().buildGraphql<TInventoryEntryDraft>();
    expect(skuOilFilterPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oil-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});
