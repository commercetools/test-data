import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2023Us from './sku-k567-yz-2023-us';

describe(`with skuK567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuK567Yz2023Us preset`, () => {
    const skuK567Yz2023UsPreset =
      skuK567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuK567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2023Us preset when built for graphql`, () => {
    const skuK567Yz2023UsPresetGraphql =
      skuK567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
