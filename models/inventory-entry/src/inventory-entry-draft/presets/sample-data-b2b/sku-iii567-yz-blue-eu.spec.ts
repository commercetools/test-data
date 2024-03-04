import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzBlueEu from './sku-iii567-yz-blue-eu';

describe(`with skuIii567YzBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuIii567YzBlueEu preset`, () => {
    const skuIii567YzBlueEuPreset =
      skuIii567YzBlueEu().build<TInventoryEntryDraft>();
    expect(skuIii567YzBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueEu preset when built for graphql`, () => {
    const skuIii567YzBlueEuPresetGraphql =
      skuIii567YzBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
