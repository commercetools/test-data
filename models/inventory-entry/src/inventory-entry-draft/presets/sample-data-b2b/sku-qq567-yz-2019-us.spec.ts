import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2019Us from './sku-qq567-yz-2019-us';

describe(`with skuQq567Yz2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuQq567Yz2019Us preset`, () => {
    const skuQq567Yz2019UsPreset =
      skuQq567Yz2019Us().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2019Us preset when built for graphql`, () => {
    const skuQq567Yz2019UsPresetGraphql =
      skuQq567Yz2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
