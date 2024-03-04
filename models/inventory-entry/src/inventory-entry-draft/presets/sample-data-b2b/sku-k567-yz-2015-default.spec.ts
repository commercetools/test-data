import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2015Default from './sku-k567-yz-2015-default';

describe(`with skuK567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuK567Yz2015Default preset`, () => {
    const skuK567Yz2015DefaultPreset =
      skuK567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuK567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2015Default preset when built for graphql`, () => {
    const skuK567Yz2015DefaultPresetGraphql =
      skuK567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
