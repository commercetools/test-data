import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StRedDefault from './sku-zz456-st-red-default';

describe(`with skuZz456StRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuZz456StRedDefault preset`, () => {
    const skuZz456StRedDefaultPreset =
      skuZz456StRedDefault().build<TInventoryEntryDraft>();
    expect(skuZz456StRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StRedDefault preset when built for graphql`, () => {
    const skuZz456StRedDefaultPresetGraphql =
      skuZz456StRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
