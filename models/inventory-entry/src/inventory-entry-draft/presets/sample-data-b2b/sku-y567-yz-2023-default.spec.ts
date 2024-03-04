import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2023Default from './sku-y567-yz-2023-default';

describe(`with skuY567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuY567Yz2023Default preset`, () => {
    const skuY567Yz2023DefaultPreset =
      skuY567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuY567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuY567Yz2023Default preset when built for graphql`, () => {
    const skuY567Yz2023DefaultPresetGraphql =
      skuY567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
