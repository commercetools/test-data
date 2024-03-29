import type { TInventoryEntryDraft } from '../../../types';
import skuHydraulicHoseEu from './sku-hydraulic-hose-eu';

describe(`with skuHydraulicHoseEu preset and eu-warehouse channel`, () => {
  it(`should return a skuHydraulicHoseEu preset`, () => {
    const skuHydraulicHoseEuPreset =
      skuHydraulicHoseEu().build<TInventoryEntryDraft>();
    expect(skuHydraulicHoseEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHydraulicHoseEu preset when built for graphql`, () => {
    const skuHydraulicHoseEuPresetGraphql =
      skuHydraulicHoseEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHydraulicHoseEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
