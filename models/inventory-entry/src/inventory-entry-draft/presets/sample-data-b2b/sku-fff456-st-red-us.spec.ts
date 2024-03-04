import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StRedUs from './sku-fff456-st-red-us';

describe(`with skuFff456StRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuFff456StRedUs preset`, () => {
    const skuFff456StRedUsPreset =
      skuFff456StRedUs().build<TInventoryEntryDraft>();
    expect(skuFff456StRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StRedUs preset when built for graphql`, () => {
    const skuFff456StRedUsPresetGraphql =
      skuFff456StRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
