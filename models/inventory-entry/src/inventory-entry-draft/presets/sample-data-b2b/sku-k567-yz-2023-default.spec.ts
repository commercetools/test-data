import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2023Default from './sku-k567-yz-2023-default';

describe(`with skuK567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuK567Yz2023Default preset`, () => {
    const skuK567Yz2023DefaultPreset =
      skuK567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuK567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2023Default preset when built for graphql`, () => {
    const skuK567Yz2023DefaultPresetGraphql =
      skuK567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
