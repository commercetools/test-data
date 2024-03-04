import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2023Us from './sku-x456-yz-2023-us';

describe(`with skuX456Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuX456Yz2023Us preset`, () => {
    const skuX456Yz2023UsPreset =
      skuX456Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuX456Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2023Us preset when built for graphql`, () => {
    const skuX456Yz2023UsPresetGraphql =
      skuX456Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
