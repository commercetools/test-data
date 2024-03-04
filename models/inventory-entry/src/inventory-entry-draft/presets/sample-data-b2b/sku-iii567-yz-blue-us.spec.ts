import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzBlueUs from './sku-iii567-yz-blue-us';

describe(`with skuIii567YzBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuIii567YzBlueUs preset`, () => {
    const skuIii567YzBlueUsPreset =
      skuIii567YzBlueUs().build<TInventoryEntryDraft>();
    expect(skuIii567YzBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzBlueUs preset when built for graphql`, () => {
    const skuIii567YzBlueUsPresetGraphql =
      skuIii567YzBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
