import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2023Us from './sku-e567-yz-2023-us';

describe(`with skuE567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuE567Yz2023Us preset`, () => {
    const skuE567Yz2023UsPreset =
      skuE567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuE567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2023Us preset when built for graphql`, () => {
    const skuE567Yz2023UsPresetGraphql =
      skuE567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
