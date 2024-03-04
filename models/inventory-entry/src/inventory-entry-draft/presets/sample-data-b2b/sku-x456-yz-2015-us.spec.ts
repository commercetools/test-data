import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2015Us from './sku-x456-yz-2015-us';

describe(`with skuX456Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuX456Yz2015Us preset`, () => {
    const skuX456Yz2015UsPreset =
      skuX456Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuX456Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2015Us preset when built for graphql`, () => {
    const skuX456Yz2015UsPresetGraphql =
      skuX456Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
