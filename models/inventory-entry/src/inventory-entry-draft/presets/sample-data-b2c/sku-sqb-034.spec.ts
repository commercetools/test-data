import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sqb-034';

describe(`with skuSqb034 preset`, () => {
  it(`should return a skuSqb034 preset when built for rest`, () => {
    const skuSqb034Preset = presets.restPreset().build();
    expect(skuSqb034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSqb034 preset when built for graphql`, () => {
    const skuSqb034Preset = presets.graphqlPreset().build();
    expect(skuSqb034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSqb034 preset when built for legacy rest`, () => {
    const skuSqb034Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSqb034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSqb034 preset when built for legacy graphql`, () => {
    const skuSqb034Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSqb034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SQB-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
