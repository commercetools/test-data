import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2023Us from './sku-y567-yz-2023-us';

describe(`with skuY567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuY567Yz2023Us preset`, () => {
    const skuY567Yz2023UsPreset =
      skuY567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuY567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2023Us preset when built for graphql`, () => {
    const skuY567Yz2023UsPresetGraphql =
      skuY567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
