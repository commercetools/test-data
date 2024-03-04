import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StGreenUs from './sku-tt456-st-green-us';

describe(`with skuTt456StGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuTt456StGreenUs preset`, () => {
    const skuTt456StGreenUsPreset =
      skuTt456StGreenUs().build<TInventoryEntryDraft>();
    expect(skuTt456StGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StGreenUs preset when built for graphql`, () => {
    const skuTt456StGreenUsPresetGraphql =
      skuTt456StGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
