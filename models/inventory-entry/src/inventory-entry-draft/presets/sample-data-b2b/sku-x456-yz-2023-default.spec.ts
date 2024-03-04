import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2023Default from './sku-x456-yz-2023-default';

describe(`with skuX456Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuX456Yz2023Default preset`, () => {
    const skuX456Yz2023DefaultPreset =
      skuX456Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuX456Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2023Default preset when built for graphql`, () => {
    const skuX456Yz2023DefaultPresetGraphql =
      skuX456Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
