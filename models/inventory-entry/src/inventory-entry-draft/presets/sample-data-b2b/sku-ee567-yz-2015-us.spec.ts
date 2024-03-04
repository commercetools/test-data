import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2015Us from './sku-ee567-yz-2015-us';

describe(`with skuEe567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuEe567Yz2015Us preset`, () => {
    const skuEe567Yz2015UsPreset =
      skuEe567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2015Us preset when built for graphql`, () => {
    const skuEe567Yz2015UsPresetGraphql =
      skuEe567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
