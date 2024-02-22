import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StRed from './sku-tt-456-st-red';

describe(`with skuTt456StRed preset`, () => {
  it(`should return a skuTt456StRed preset`, () => {
    const skuTt456StRedPreset = skuTt456StRed().build<TInventoryEntryDraft>();
    expect(skuTt456StRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StRed preset when built for graphql`, () => {
    const skuTt456StRedPresetGraphql =
      skuTt456StRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
