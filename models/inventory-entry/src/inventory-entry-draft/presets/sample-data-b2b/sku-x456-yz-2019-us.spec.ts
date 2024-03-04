import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2019Us from './sku-x456-yz-2019-us';

describe(`with skuX456Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuX456Yz2019Us preset`, () => {
    const skuX456Yz2019UsPreset =
      skuX456Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuX456Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2019Us preset when built for graphql`, () => {
    const skuX456Yz2019UsPresetGraphql =
      skuX456Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
