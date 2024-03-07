import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2019Default from './sku-qq567-yz-2019-default';

describe(`with skuQq567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuQq567Yz2019Default preset`, () => {
    const skuQq567Yz2019DefaultPreset =
      skuQq567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2019Default preset when built for graphql`, () => {
    const skuQq567Yz2019DefaultPresetGraphql =
      skuQq567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
