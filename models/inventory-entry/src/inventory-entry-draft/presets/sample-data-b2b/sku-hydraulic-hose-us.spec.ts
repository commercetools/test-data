import type { TInventoryEntryDraft } from '../../../types';
import skuHydraulicHoseUs from './sku-hydraulic-hose-us';

describe(`with skuHydraulicHoseUs preset and us-warehouse channel`, () => {
  it(`should return a skuHydraulicHoseUs preset`, () => {
    const skuHydraulicHoseUsPreset =
      skuHydraulicHoseUs().build<TInventoryEntryDraft>();
    expect(skuHydraulicHoseUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHydraulicHoseUs preset when built for graphql`, () => {
    const skuHydraulicHoseUsPresetGraphql =
      skuHydraulicHoseUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuHydraulicHoseUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
