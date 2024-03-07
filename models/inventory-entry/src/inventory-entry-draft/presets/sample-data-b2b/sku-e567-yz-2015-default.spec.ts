import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2015Default from './sku-e567-yz-2015-default';

describe(`with skuE567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuE567Yz2015Default preset`, () => {
    const skuE567Yz2015DefaultPreset =
      skuE567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuE567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015Default preset when built for graphql`, () => {
    const skuE567Yz2015DefaultPresetGraphql =
      skuE567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
