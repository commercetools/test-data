import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2023Default from './sku-ee567-yz-2023-default';

describe(`with skuEe567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuEe567Yz2023Default preset`, () => {
    const skuEe567Yz2023DefaultPreset =
      skuEe567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2023Default preset when built for graphql`, () => {
    const skuEe567Yz2023DefaultPresetGraphql =
      skuEe567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
