import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StGreenDefault from './sku-fff456-st-green-default';

describe(`with skuFff456StGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuFff456StGreenDefault preset`, () => {
    const skuFff456StGreenDefaultPreset =
      skuFff456StGreenDefault().build<TInventoryEntryDraft>();
    expect(skuFff456StGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StGreenDefault preset when built for graphql`, () => {
    const skuFff456StGreenDefaultPresetGraphql =
      skuFff456StGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
