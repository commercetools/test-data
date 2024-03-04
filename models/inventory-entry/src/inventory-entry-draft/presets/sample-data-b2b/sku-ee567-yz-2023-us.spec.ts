import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2023Us from './sku-ee567-yz-2023-us';

describe(`with skuEe567Yz2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuEe567Yz2023Us preset`, () => {
    const skuEe567Yz2023UsPreset =
      skuEe567Yz2023Us().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2023Us preset when built for graphql`, () => {
    const skuEe567Yz2023UsPresetGraphql =
      skuEe567Yz2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
