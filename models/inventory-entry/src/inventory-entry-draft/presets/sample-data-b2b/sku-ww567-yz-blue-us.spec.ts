import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzBlueUs from './sku-ww567-yz-blue-us';

describe(`with skuWw567YzBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuWw567YzBlueUs preset`, () => {
    const skuWw567YzBlueUsPreset =
      skuWw567YzBlueUs().build<TInventoryEntryDraft>();
    expect(skuWw567YzBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzBlueUs preset when built for graphql`, () => {
    const skuWw567YzBlueUsPresetGraphql =
      skuWw567YzBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
