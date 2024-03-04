import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2015Us from './sku-y567-yz-2015-us';

describe(`with skuY567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuY567Yz2015Us preset`, () => {
    const skuY567Yz2015UsPreset =
      skuY567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuY567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2015Us preset when built for graphql`, () => {
    const skuY567Yz2015UsPresetGraphql =
      skuY567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
