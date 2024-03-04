import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzGreenUs from './sku-iii567-yz-green-us';

describe(`with skuIii567YzGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuIii567YzGreenUs preset`, () => {
    const skuIii567YzGreenUsPreset =
      skuIii567YzGreenUs().build<TInventoryEntryDraft>();
    expect(skuIii567YzGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzGreenUs preset when built for graphql`, () => {
    const skuIii567YzGreenUsPresetGraphql =
      skuIii567YzGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
