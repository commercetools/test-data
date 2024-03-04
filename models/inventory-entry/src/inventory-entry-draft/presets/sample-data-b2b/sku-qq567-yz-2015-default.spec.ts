import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2015Default from './sku-qq567-yz-2015-default';

describe(`with skuQq567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuQq567Yz2015Default preset`, () => {
    const skuQq567Yz2015DefaultPreset =
      skuQq567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2015Default preset when built for graphql`, () => {
    const skuQq567Yz2015DefaultPresetGraphql =
      skuQq567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
