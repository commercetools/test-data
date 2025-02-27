import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mutb-02';

describe(`with skuMutb02 preset`, () => {
  it(`should return a skuMutb02 preset when built for rest`, () => {
    const skuMutb02Preset = presets.restPreset().build();
    expect(skuMutb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb02 preset when built for graphql`, () => {
    const skuMutb02Preset = presets.graphqlPreset().build();
    expect(skuMutb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb02 preset when built for legacy rest`, () => {
    const skuMutb02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMutb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb02 preset when built for legacy graphql`, () => {
    const skuMutb02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMutb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-02",
        "supplyChannel": undefined,
      }
    `);
  });
});
