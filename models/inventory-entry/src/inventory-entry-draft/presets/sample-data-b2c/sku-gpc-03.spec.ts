import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-gpc-03';

describe(`with skuGpc03 preset`, () => {
  it(`should return a skuGpc03 preset when built for rest`, () => {
    const skuGpc03Preset = presets.restPreset().build();
    expect(skuGpc03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc03 preset when built for graphql`, () => {
    const skuGpc03Preset = presets.graphqlPreset().build();
    expect(skuGpc03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc03 preset when built for legacy rest`, () => {
    const skuGpc03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc03 preset when built for legacy graphql`, () => {
    const skuGpc03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
