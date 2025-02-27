import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mutb-03';

describe(`with skuMutb03 preset`, () => {
  it(`should return a skuMutb03 preset when built for rest`, () => {
    const skuMutb03Preset = presets.restPreset().build();
    expect(skuMutb03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb03 preset when built for graphql`, () => {
    const skuMutb03Preset = presets.graphqlPreset().build();
    expect(skuMutb03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb03 preset when built for legacy rest`, () => {
    const skuMutb03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMutb03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMutb03 preset when built for legacy graphql`, () => {
    const skuMutb03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMutb03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MUTB-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
