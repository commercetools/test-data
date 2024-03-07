import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StBlueDefault from './sku-fff456-st-blue-default';

describe(`with skuFff456StBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuFff456StBlueDefault preset`, () => {
    const skuFff456StBlueDefaultPreset =
      skuFff456StBlueDefault().build<TInventoryEntryDraft>();
    expect(skuFff456StBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueDefault preset when built for graphql`, () => {
    const skuFff456StBlueDefaultPresetGraphql =
      skuFff456StBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
