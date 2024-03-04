import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2019Us from './sku-kk567-yz-2019-us';

describe(`with skuKk567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuKk567Yz2019Us preset`, () => {
    const skuKk567Yz2019UsPreset =
      skuKk567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuKk567Yz2019Us preset when built for graphql`, () => {
    const skuKk567Yz2019UsPresetGraphql =
      skuKk567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
