import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StRedUs from './sku-tt456-st-red-us';

describe(`with skuTt456StRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuTt456StRedUs preset`, () => {
    const skuTt456StRedUsPreset =
      skuTt456StRedUs().build<TInventoryEntryDraft>();
    expect(skuTt456StRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StRedUs preset when built for graphql`, () => {
    const skuTt456StRedUsPresetGraphql =
      skuTt456StRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
