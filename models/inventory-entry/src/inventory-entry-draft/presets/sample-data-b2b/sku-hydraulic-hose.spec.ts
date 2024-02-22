import type { TInventoryEntryDraft } from '../../../types';
import skuHydraulicHose from './sku-hydraulic-hose';

describe(`with skuHydraulicHose preset`, () => {
  it(`should return a skuHydraulicHose preset`, () => {
    const skuHydraulicHosePreset =
      skuHydraulicHose().build<TInventoryEntryDraft>();
    expect(skuHydraulicHosePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHydraulicHose preset when built for graphql`, () => {
    const skuHydraulicHosePresetGraphql =
      skuHydraulicHose().buildGraphql<TInventoryEntryDraft>();
    expect(skuHydraulicHosePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": undefined,
      }
    `);
  });
});
