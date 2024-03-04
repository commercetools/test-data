import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzRedEu from './sku-ccc567-yz-red-eu';

describe(`with skuCcc567YzRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuCcc567YzRedEu preset`, () => {
    const skuCcc567YzRedEuPreset =
      skuCcc567YzRedEu().build<TInventoryEntryDraft>();
    expect(skuCcc567YzRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzRedEu preset when built for graphql`, () => {
    const skuCcc567YzRedEuPresetGraphql =
      skuCcc567YzRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
