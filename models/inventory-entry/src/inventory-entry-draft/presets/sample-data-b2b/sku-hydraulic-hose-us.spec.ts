import type { TInventoryEntryDraft } from '../../../types';
import skuHydraulicHoseUs from './sku-hydraulic-hose-us';

describe(`with skuHydraulicHoseUs preset and us-warehouse channel`, () => {
  it(`should return a skuHydraulicHoseUs preset`, () => {
    const skuHydraulicHoseUsPreset =
      skuHydraulicHoseUs().build<TInventoryEntryDraft>();
    expect(skuHydraulicHoseUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHydraulicHoseUs preset when built for graphql`, () => {
    const skuHydraulicHoseUsPresetGraphql =
      skuHydraulicHoseUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuHydraulicHoseUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });
});
