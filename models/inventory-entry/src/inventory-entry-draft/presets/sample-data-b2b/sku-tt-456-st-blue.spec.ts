import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StBlue from './sku-tt-456-st-blue';

describe(`with skuTt456StBlue preset`, () => {
  it(`should return a skuTt456StBlue preset`, () => {
    const skuTt456StBluePreset = skuTt456StBlue().build<TInventoryEntryDraft>();
    expect(skuTt456StBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StBlue preset when built for graphql`, () => {
    const skuTt456StBluePresetGraphql =
      skuTt456StBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
