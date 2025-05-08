import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mutb-04';

describe(`with skuMutb04 preset`, () => {
  it(`should return a skuMutb04 preset when built for rest`, () => {
    const skuMutb04Preset = presets.restPreset().build();
    expect(skuMutb04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb04 preset when built for graphql`, () => {
    const skuMutb04Preset = presets.graphqlPreset().build();
    expect(skuMutb04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb04 preset when built for legacy rest`, () => {
    const skuMutb04Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMutb04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb04 preset when built for legacy graphql`, () => {
    const skuMutb04Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMutb04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
