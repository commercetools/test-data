import type { TInventoryEntryDraft } from '../../../types';
import skuTaperedRollerBearingDefault from './sku-tapered-roller-bearing-default';

describe(`with skuTaperedRollerBearingDefault preset and default-warehouse channel`, () => {
  it(`should return a skuTaperedRollerBearingDefault preset`, () => {
    const skuTaperedRollerBearingDefaultPreset =
      skuTaperedRollerBearingDefault().build<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingDefault preset when built for graphql`, () => {
    const skuTaperedRollerBearingDefaultPresetGraphql =
      skuTaperedRollerBearingDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
