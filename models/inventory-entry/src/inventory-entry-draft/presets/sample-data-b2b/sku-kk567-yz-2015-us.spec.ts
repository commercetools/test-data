import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2015Us from './sku-kk567-yz-2015-us';

describe(`with skuKk567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuKk567Yz2015Us preset`, () => {
    const skuKk567Yz2015UsPreset =
      skuKk567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2015Us preset when built for graphql`, () => {
    const skuKk567Yz2015UsPresetGraphql =
      skuKk567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
