import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzRedEu from './sku-ww567-yz-red-eu';

describe(`with skuWw567YzRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuWw567YzRedEu preset`, () => {
    const skuWw567YzRedEuPreset =
      skuWw567YzRedEu().build<TInventoryEntryDraft>();
    expect(skuWw567YzRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzRedEu preset when built for graphql`, () => {
    const skuWw567YzRedEuPresetGraphql =
      skuWw567YzRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
