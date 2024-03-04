import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StRedUs from './sku-zz456-st-red-us';

describe(`with skuZz456StRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuZz456StRedUs preset`, () => {
    const skuZz456StRedUsPreset =
      skuZz456StRedUs().build<TInventoryEntryDraft>();
    expect(skuZz456StRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StRedUs preset when built for graphql`, () => {
    const skuZz456StRedUsPresetGraphql =
      skuZz456StRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
