import type { TInventoryEntryDraft } from '../../../types';
import skuTaperedRollerBearing from './sku-tapered-roller-bearing';

describe(`with skuTaperedRollerBearing preset`, () => {
  it(`should return a skuTaperedRollerBearing preset`, () => {
    const skuTaperedRollerBearingPreset =
      skuTaperedRollerBearing().build<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTaperedRollerBearing preset when built for graphql`, () => {
    const skuTaperedRollerBearingPresetGraphql =
      skuTaperedRollerBearing().buildGraphql<TInventoryEntryDraft>();
    expect(skuTaperedRollerBearingPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": undefined,
      }
    `);
  });
});
