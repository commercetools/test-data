import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzGreenEu from './sku-iii567-yz-green-eu';

describe(`with skuIii567YzGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuIii567YzGreenEu preset`, () => {
    const skuIii567YzGreenEuPreset =
      skuIii567YzGreenEu().build<TInventoryEntryDraft>();
    expect(skuIii567YzGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzGreenEu preset when built for graphql`, () => {
    const skuIii567YzGreenEuPresetGraphql =
      skuIii567YzGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
