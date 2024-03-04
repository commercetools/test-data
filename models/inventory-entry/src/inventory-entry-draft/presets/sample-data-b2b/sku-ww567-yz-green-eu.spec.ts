import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzGreenEu from './sku-ww567-yz-green-eu';

describe(`with skuWw567YzGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuWw567YzGreenEu preset`, () => {
    const skuWw567YzGreenEuPreset =
      skuWw567YzGreenEu().build<TInventoryEntryDraft>();
    expect(skuWw567YzGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzGreenEu preset when built for graphql`, () => {
    const skuWw567YzGreenEuPresetGraphql =
      skuWw567YzGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
