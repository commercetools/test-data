import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2015Default from './sku-ee567-yz-2015-default';

describe(`with skuEe567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuEe567Yz2015Default preset`, () => {
    const skuEe567Yz2015DefaultPreset =
      skuEe567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2015Default preset when built for graphql`, () => {
    const skuEe567Yz2015DefaultPresetGraphql =
      skuEe567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
