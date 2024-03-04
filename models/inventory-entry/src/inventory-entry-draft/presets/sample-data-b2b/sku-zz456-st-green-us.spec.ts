import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StGreenUs from './sku-zz456-st-green-us';

describe(`with skuZz456StGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuZz456StGreenUs preset`, () => {
    const skuZz456StGreenUsPreset =
      skuZz456StGreenUs().build<TInventoryEntryDraft>();
    expect(skuZz456StGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StGreenUs preset when built for graphql`, () => {
    const skuZz456StGreenUsPresetGraphql =
      skuZz456StGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
