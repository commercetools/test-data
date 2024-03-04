import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzGreenEu from './sku-ccc567-yz-green-eu';

describe(`with skuCcc567YzGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuCcc567YzGreenEu preset`, () => {
    const skuCcc567YzGreenEuPreset =
      skuCcc567YzGreenEu().build<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzGreenEu preset when built for graphql`, () => {
    const skuCcc567YzGreenEuPresetGraphql =
      skuCcc567YzGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
