import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StBlueUs from './sku-zz456-st-blue-us';

describe(`with skuZz456StBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuZz456StBlueUs preset`, () => {
    const skuZz456StBlueUsPreset =
      skuZz456StBlueUs().build<TInventoryEntryDraft>();
    expect(skuZz456StBlueUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StBlueUs preset when built for graphql`, () => {
    const skuZz456StBlueUsPresetGraphql =
      skuZz456StBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
