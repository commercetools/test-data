import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzRedUs from './sku-ww567-yz-red-us';

describe(`with skuWw567YzRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuWw567YzRedUs preset`, () => {
    const skuWw567YzRedUsPreset =
      skuWw567YzRedUs().build<TInventoryEntryDraft>();
    expect(skuWw567YzRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzRedUs preset when built for graphql`, () => {
    const skuWw567YzRedUsPresetGraphql =
      skuWw567YzRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
