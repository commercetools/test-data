import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2019Default from './sku-y567-yz-2019-default';

describe(`with skuY567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuY567Yz2019Default preset`, () => {
    const skuY567Yz2019DefaultPreset =
      skuY567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuY567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuY567Yz2019Default preset when built for graphql`, () => {
    const skuY567Yz2019DefaultPresetGraphql =
      skuY567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
