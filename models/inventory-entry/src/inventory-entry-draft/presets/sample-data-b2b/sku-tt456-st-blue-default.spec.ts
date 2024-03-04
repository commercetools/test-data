import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StBlueDefault from './sku-tt456-st-blue-default';

describe(`with skuTt456StBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuTt456StBlueDefault preset`, () => {
    const skuTt456StBlueDefaultPreset =
      skuTt456StBlueDefault().build<TInventoryEntryDraft>();
    expect(skuTt456StBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTt456StBlueDefault preset when built for graphql`, () => {
    const skuTt456StBlueDefaultPresetGraphql =
      skuTt456StBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
