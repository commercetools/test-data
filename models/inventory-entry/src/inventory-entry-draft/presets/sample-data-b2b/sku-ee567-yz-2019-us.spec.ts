import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2019Us from './sku-ee567-yz-2019-us';

describe(`with skuEe567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuEe567Yz2019Us preset`, () => {
    const skuEe567Yz2019UsPreset =
      skuEe567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2019Us preset when built for graphql`, () => {
    const skuEe567Yz2019UsPresetGraphql =
      skuEe567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
