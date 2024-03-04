import type { TInventoryEntryDraft } from '../../../types';
import skuHydraulicHoseDefault from './sku-hydraulic-hose-default';

describe(`with skuHydraulicHoseDefault preset and default-warehouse channel`, () => {
  it(`should return a skuHydraulicHoseDefault preset`, () => {
    const skuHydraulicHoseDefaultPreset =
      skuHydraulicHoseDefault().build<TInventoryEntryDraft>();
    expect(skuHydraulicHoseDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHydraulicHoseDefault preset when built for graphql`, () => {
    const skuHydraulicHoseDefaultPresetGraphql =
      skuHydraulicHoseDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuHydraulicHoseDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });
});
