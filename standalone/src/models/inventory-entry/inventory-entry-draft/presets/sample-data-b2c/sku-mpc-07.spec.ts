import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mpc-07';

describe(`with skuMpc07 preset`, () => {
  it(`should return a skuMpc07 preset when built for rest`, () => {
    const skuMpc07Preset = presets.restPreset().build();
    expect(skuMpc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc07 preset when built for graphql`, () => {
    const skuMpc07Preset = presets.graphqlPreset().build();
    expect(skuMpc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc07 preset when built for legacy rest`, () => {
    const skuMpc07Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMpc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc07 preset when built for legacy graphql`, () => {
    const skuMpc07Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMpc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-07",
        "supplyChannel": undefined,
      }
    `);
  });
});
