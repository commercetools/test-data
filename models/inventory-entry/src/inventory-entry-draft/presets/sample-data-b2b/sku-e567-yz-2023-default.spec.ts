import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2023Default from './sku-e567-yz-2023-default';

describe(`with skuE567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuE567Yz2023Default preset`, () => {
    const skuE567Yz2023DefaultPreset =
      skuE567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuE567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2023Default preset when built for graphql`, () => {
    const skuE567Yz2023DefaultPresetGraphql =
      skuE567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
