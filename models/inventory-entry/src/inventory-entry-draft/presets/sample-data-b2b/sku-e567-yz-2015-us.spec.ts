import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2015Us from './sku-e567-yz-2015-us';

describe(`with skuE567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuE567Yz2015Us preset`, () => {
    const skuE567Yz2015UsPreset =
      skuE567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuE567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015Us preset when built for graphql`, () => {
    const skuE567Yz2015UsPresetGraphql =
      skuE567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
