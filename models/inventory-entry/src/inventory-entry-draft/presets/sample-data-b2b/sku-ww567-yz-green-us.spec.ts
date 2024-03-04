import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzGreenUs from './sku-ww567-yz-green-us';

describe(`with skuWw567YzGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuWw567YzGreenUs preset`, () => {
    const skuWw567YzGreenUsPreset =
      skuWw567YzGreenUs().build<TInventoryEntryDraft>();
    expect(skuWw567YzGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzGreenUs preset when built for graphql`, () => {
    const skuWw567YzGreenUsPresetGraphql =
      skuWw567YzGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
