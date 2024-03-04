import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2015Us from './sku-qq567-yz-2015-us';

describe(`with skuQq567Yz2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuQq567Yz2015Us preset`, () => {
    const skuQq567Yz2015UsPreset =
      skuQq567Yz2015Us().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2015Us preset when built for graphql`, () => {
    const skuQq567Yz2015UsPresetGraphql =
      skuQq567Yz2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
