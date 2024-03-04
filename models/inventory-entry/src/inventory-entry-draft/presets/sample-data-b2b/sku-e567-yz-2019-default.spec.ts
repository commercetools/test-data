import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2019Default from './sku-e567-yz-2019-default';

describe(`with skuE567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuE567Yz2019Default preset`, () => {
    const skuE567Yz2019DefaultPreset =
      skuE567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuE567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2019Default preset when built for graphql`, () => {
    const skuE567Yz2019DefaultPresetGraphql =
      skuE567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
