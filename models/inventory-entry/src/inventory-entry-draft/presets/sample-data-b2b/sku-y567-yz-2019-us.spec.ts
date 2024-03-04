import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2019Us from './sku-y567-yz-2019-us';

describe(`with skuY567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuY567Yz2019Us preset`, () => {
    const skuY567Yz2019UsPreset =
      skuY567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuY567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuY567Yz2019Us preset when built for graphql`, () => {
    const skuY567Yz2019UsPresetGraphql =
      skuY567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
