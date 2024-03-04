import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzBlueUs from './sku-ccc567-yz-blue-us';

describe(`with skuCcc567YzBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuCcc567YzBlueUs preset`, () => {
    const skuCcc567YzBlueUsPreset =
      skuCcc567YzBlueUs().build<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueUs preset when built for graphql`, () => {
    const skuCcc567YzBlueUsPresetGraphql =
      skuCcc567YzBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
