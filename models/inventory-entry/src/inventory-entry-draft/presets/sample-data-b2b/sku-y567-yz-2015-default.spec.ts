import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2015Default from './sku-y567-yz-2015-default';

describe(`with skuY567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuY567Yz2015Default preset`, () => {
    const skuY567Yz2015DefaultPreset =
      skuY567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuY567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuY567Yz2015Default preset when built for graphql`, () => {
    const skuY567Yz2015DefaultPresetGraphql =
      skuY567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
