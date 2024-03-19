import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzRedEu from './sku-iii567-yz-red-eu';

describe(`with skuIii567YzRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuIii567YzRedEu preset`, () => {
    const skuIii567YzRedEuPreset =
      skuIii567YzRedEu().build<TInventoryEntryDraft>();
    expect(skuIii567YzRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedEu preset when built for graphql`, () => {
    const skuIii567YzRedEuPresetGraphql =
      skuIii567YzRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
