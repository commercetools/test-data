import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2019Us from './sku-k567-yz-2019-us';

describe(`with skuK567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuK567Yz2019Us preset`, () => {
    const skuK567Yz2019UsPreset =
      skuK567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuK567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2019Us preset when built for graphql`, () => {
    const skuK567Yz2019UsPresetGraphql =
      skuK567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
