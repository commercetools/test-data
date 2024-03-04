import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzRedUs from './sku-iii567-yz-red-us';

describe(`with skuIii567YzRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuIii567YzRedUs preset`, () => {
    const skuIii567YzRedUsPreset =
      skuIii567YzRedUs().build<TInventoryEntryDraft>();
    expect(skuIii567YzRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedUs preset when built for graphql`, () => {
    const skuIii567YzRedUsPresetGraphql =
      skuIii567YzRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
