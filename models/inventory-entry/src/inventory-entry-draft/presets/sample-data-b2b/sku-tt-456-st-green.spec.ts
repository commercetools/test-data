import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StGreen from './sku-tt-456-st-green';

describe(`with skuTt456StGreen preset`, () => {
  it(`should return a skuTt456StGreen preset`, () => {
    const skuTt456StGreenPreset =
      skuTt456StGreen().build<TInventoryEntryDraft>();
    expect(skuTt456StGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StGreen preset when built for graphql`, () => {
    const skuTt456StGreenPresetGraphql =
      skuTt456StGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
