import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2015Us from './sku-k567-yz-2015-us';

describe(`with skuK567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuK567Yz2015Us preset`, () => {
    const skuK567Yz2015UsPreset =
      skuK567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuK567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2015Us preset when built for graphql`, () => {
    const skuK567Yz2015UsPresetGraphql =
      skuK567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
