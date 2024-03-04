import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StGreenEu from './sku-tt456-st-green-eu';

describe(`with skuTt456StGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuTt456StGreenEu preset`, () => {
    const skuTt456StGreenEuPreset =
      skuTt456StGreenEu().build<TInventoryEntryDraft>();
    expect(skuTt456StGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTt456StGreenEu preset when built for graphql`, () => {
    const skuTt456StGreenEuPresetGraphql =
      skuTt456StGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
