import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzGreenUs from './sku-ccc567-yz-green-us';

describe(`with skuCcc567YzGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuCcc567YzGreenUs preset`, () => {
    const skuCcc567YzGreenUsPreset =
      skuCcc567YzGreenUs().build<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzGreenUs preset when built for graphql`, () => {
    const skuCcc567YzGreenUsPresetGraphql =
      skuCcc567YzGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
