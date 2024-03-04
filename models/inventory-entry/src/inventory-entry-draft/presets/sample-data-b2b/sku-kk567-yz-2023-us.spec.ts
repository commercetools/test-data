import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2023Us from './sku-kk567-yz-2023-us';

describe(`with skuKk567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuKk567Yz2023Us preset`, () => {
    const skuKk567Yz2023UsPreset =
      skuKk567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuKk567Yz2023Us preset when built for graphql`, () => {
    const skuKk567Yz2023UsPresetGraphql =
      skuKk567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
