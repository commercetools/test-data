import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2019Default from './sku-ee567-yz-2019-default';

describe(`with skuEe567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuEe567Yz2019Default preset`, () => {
    const skuEe567Yz2019DefaultPreset =
      skuEe567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2019Default preset when built for graphql`, () => {
    const skuEe567Yz2019DefaultPresetGraphql =
      skuEe567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
