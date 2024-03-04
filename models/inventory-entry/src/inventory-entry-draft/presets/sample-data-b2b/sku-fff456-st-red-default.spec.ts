import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StRedDefault from './sku-fff456-st-red-default';

describe(`with skuFff456StRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuFff456StRedDefault preset`, () => {
    const skuFff456StRedDefaultPreset =
      skuFff456StRedDefault().build<TInventoryEntryDraft>();
    expect(skuFff456StRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StRedDefault preset when built for graphql`, () => {
    const skuFff456StRedDefaultPresetGraphql =
      skuFff456StRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
