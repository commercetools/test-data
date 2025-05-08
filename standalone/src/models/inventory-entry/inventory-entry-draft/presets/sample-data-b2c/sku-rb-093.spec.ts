import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rb-093';

describe(`with skuRb093 preset`, () => {
  it(`should return a skuRb093 preset when built for rest`, () => {
    const skuRb093Preset = presets.restPreset().build();
    expect(skuRb093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRb093 preset when built for graphql`, () => {
    const skuRb093Preset = presets.graphqlPreset().build();
    expect(skuRb093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRb093 preset when built for legacy rest`, () => {
    const skuRb093Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRb093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRb093 preset when built for legacy graphql`, () => {
    const skuRb093Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRb093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RB-093",
        "supplyChannel": undefined,
      }
    `);
  });
});
