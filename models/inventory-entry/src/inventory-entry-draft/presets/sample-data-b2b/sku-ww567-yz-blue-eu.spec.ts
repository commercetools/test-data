import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzBlueEu from './sku-ww567-yz-blue-eu';

describe(`with skuWw567YzBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuWw567YzBlueEu preset`, () => {
    const skuWw567YzBlueEuPreset =
      skuWw567YzBlueEu().build<TInventoryEntryDraft>();
    expect(skuWw567YzBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzBlueEu preset when built for graphql`, () => {
    const skuWw567YzBlueEuPresetGraphql =
      skuWw567YzBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
