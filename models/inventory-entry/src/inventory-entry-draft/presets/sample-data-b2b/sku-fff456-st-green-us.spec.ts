import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StGreenUs from './sku-fff456-st-green-us';

describe(`with skuFff456StGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuFff456StGreenUs preset`, () => {
    const skuFff456StGreenUsPreset =
      skuFff456StGreenUs().build<TInventoryEntryDraft>();
    expect(skuFff456StGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StGreenUs preset when built for graphql`, () => {
    const skuFff456StGreenUsPresetGraphql =
      skuFff456StGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
