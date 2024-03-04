import type { TInventoryEntryDraft } from '../../../types';
import skuTaperedRollerBearingEu from './sku-tapered-roller-bearing-eu';

describe(`with skuTaperedRollerBearingEu preset and eu-warehouse channel`, () => {
  it(`should return a skuTaperedRollerBearingEu preset`, () => {
    const skuTaperedRollerBearingEuPreset =
      skuTaperedRollerBearingEu().build<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingEu preset when built for graphql`, () => {
    const skuTaperedRollerBearingEuPresetGraphql =
      skuTaperedRollerBearingEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
