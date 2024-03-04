import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StBlueDefault from './sku-zz456-st-blue-default';

describe(`with skuZz456StBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuZz456StBlueDefault preset`, () => {
    const skuZz456StBlueDefaultPreset =
      skuZz456StBlueDefault().build<TInventoryEntryDraft>();
    expect(skuZz456StBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StBlueDefault preset when built for graphql`, () => {
    const skuZz456StBlueDefaultPresetGraphql =
      skuZz456StBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
