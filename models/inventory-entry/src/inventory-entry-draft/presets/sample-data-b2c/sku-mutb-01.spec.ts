import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mutb-01';

describe(`with skuMutb01 preset`, () => {
  it(`should return a skuMutb01 preset when built for rest`, () => {
    const skuMutb01Preset = presets.restPreset().build();
    expect(skuMutb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb01 preset when built for graphql`, () => {
    const skuMutb01Preset = presets.graphqlPreset().build();
    expect(skuMutb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb01 preset when built for legacy rest`, () => {
    const skuMutb01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMutb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb01 preset when built for legacy graphql`, () => {
    const skuMutb01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMutb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
