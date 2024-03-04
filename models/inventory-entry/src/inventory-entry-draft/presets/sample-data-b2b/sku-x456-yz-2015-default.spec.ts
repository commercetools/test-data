import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2015Default from './sku-x456-yz-2015-default';

describe(`with skuX456Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuX456Yz2015Default preset`, () => {
    const skuX456Yz2015DefaultPreset =
      skuX456Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuX456Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2015Default preset when built for graphql`, () => {
    const skuX456Yz2015DefaultPresetGraphql =
      skuX456Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
