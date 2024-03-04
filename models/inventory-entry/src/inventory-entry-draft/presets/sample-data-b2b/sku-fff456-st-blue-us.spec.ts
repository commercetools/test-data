import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StBlueUs from './sku-fff456-st-blue-us';

describe(`with skuFff456StBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuFff456StBlueUs preset`, () => {
    const skuFff456StBlueUsPreset =
      skuFff456StBlueUs().build<TInventoryEntryDraft>();
    expect(skuFff456StBlueUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueUs preset when built for graphql`, () => {
    const skuFff456StBlueUsPresetGraphql =
      skuFff456StBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
