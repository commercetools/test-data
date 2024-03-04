import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2023Us from './sku-qq567-yz-2023-us';

describe(`with skuQq567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuQq567Yz2023Us preset`, () => {
    const skuQq567Yz2023UsPreset =
      skuQq567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2023Us preset when built for graphql`, () => {
    const skuQq567Yz2023UsPresetGraphql =
      skuQq567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
