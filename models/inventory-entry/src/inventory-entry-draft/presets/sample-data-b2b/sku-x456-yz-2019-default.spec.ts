import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2019Default from './sku-x456-yz-2019-default';

describe(`with skuX456Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuX456Yz2019Default preset`, () => {
    const skuX456Yz2019DefaultPreset =
      skuX456Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuX456Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2019Default preset when built for graphql`, () => {
    const skuX456Yz2019DefaultPresetGraphql =
      skuX456Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
