import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2019Default from './sku-k567-yz-2019-default';

describe(`with skuK567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuK567Yz2019Default preset`, () => {
    const skuK567Yz2019DefaultPreset =
      skuK567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuK567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2019Default preset when built for graphql`, () => {
    const skuK567Yz2019DefaultPresetGraphql =
      skuK567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
