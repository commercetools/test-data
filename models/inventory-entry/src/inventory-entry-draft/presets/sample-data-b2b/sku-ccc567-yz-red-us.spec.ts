import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzRedUs from './sku-ccc567-yz-red-us';

describe(`with skuCcc567YzRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuCcc567YzRedUs preset`, () => {
    const skuCcc567YzRedUsPreset =
      skuCcc567YzRedUs().build<TInventoryEntryDraft>();
    expect(skuCcc567YzRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzRedUs preset when built for graphql`, () => {
    const skuCcc567YzRedUsPresetGraphql =
      skuCcc567YzRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
