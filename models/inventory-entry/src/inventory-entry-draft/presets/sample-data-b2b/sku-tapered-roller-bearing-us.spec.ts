import type { TInventoryEntryDraft } from '../../../types';
import skuTaperedRollerBearingUs from './sku-tapered-roller-bearing-us';

describe(`with skuTaperedRollerBearingUs preset and us-warehouse channel`, () => {
  it(`should return a skuTaperedRollerBearingUs preset`, () => {
    const skuTaperedRollerBearingUsPreset =
      skuTaperedRollerBearingUs().build<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingUs preset when built for graphql`, () => {
    const skuTaperedRollerBearingUsPresetGraphql =
      skuTaperedRollerBearingUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
