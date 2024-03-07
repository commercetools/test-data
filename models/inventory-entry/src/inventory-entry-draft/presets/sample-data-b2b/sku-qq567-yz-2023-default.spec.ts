import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2023Default from './sku-qq567-yz-2023-default';

describe(`with skuQq567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuQq567Yz2023Default preset`, () => {
    const skuQq567Yz2023DefaultPreset =
      skuQq567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2023Default preset when built for graphql`, () => {
    const skuQq567Yz2023DefaultPresetGraphql =
      skuQq567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
