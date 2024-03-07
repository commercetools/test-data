import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2019Us from './sku-e567-yz-2019-us';

describe(`with skuE567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuE567Yz2019Us preset`, () => {
    const skuE567Yz2019UsPreset =
      skuE567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuE567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2019Us preset when built for graphql`, () => {
    const skuE567Yz2019UsPresetGraphql =
      skuE567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
