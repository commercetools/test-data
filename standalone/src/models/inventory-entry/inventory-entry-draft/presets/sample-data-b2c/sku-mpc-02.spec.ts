import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mpc-02';

describe(`with skuMpc02 preset`, () => {
  it(`should return a skuMpc02 preset when built for rest`, () => {
    const skuMpc02Preset = presets.restPreset().build();
    expect(skuMpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc02 preset when built for graphql`, () => {
    const skuMpc02Preset = presets.graphqlPreset().build();
    expect(skuMpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc02 preset when built for legacy rest`, () => {
    const skuMpc02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMpc02 preset when built for legacy graphql`, () => {
    const skuMpc02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MPC-02",
        "supplyChannel": undefined,
      }
    `);
  });
});
