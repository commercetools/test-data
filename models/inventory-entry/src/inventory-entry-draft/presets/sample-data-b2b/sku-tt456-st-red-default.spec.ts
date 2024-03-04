import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StRedDefault from './sku-tt456-st-red-default';

describe(`with skuTt456StRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuTt456StRedDefault preset`, () => {
    const skuTt456StRedDefaultPreset =
      skuTt456StRedDefault().build<TInventoryEntryDraft>();
    expect(skuTt456StRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StRedDefault preset when built for graphql`, () => {
    const skuTt456StRedDefaultPresetGraphql =
      skuTt456StRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
