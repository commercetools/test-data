import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzGreenEu from './sku-ccc567-yz-green-eu';

describe(`with skuCcc567YzGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuCcc567YzGreenEu preset`, () => {
    const skuCcc567YzGreenEuPreset =
      skuCcc567YzGreenEu().build<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzGreenEu preset when built for graphql`, () => {
    const skuCcc567YzGreenEuPresetGraphql =
      skuCcc567YzGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
