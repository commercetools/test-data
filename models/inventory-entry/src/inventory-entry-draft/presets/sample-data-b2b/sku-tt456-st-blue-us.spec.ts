import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StBlueUs from './sku-tt456-st-blue-us';

describe(`with skuTt456StBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuTt456StBlueUs preset`, () => {
    const skuTt456StBlueUsPreset =
      skuTt456StBlueUs().build<TInventoryEntryDraft>();
    expect(skuTt456StBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StBlueUs preset when built for graphql`, () => {
    const skuTt456StBlueUsPresetGraphql =
      skuTt456StBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
