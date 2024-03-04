import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzBlueEu from './sku-ccc567-yz-blue-eu';

describe(`with skuCcc567YzBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuCcc567YzBlueEu preset`, () => {
    const skuCcc567YzBlueEuPreset =
      skuCcc567YzBlueEu().build<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzBlueEu preset when built for graphql`, () => {
    const skuCcc567YzBlueEuPresetGraphql =
      skuCcc567YzBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
