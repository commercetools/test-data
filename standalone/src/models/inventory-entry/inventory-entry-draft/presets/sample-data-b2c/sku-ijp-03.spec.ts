import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ijp-03';

describe(`with skuIjp03 preset`, () => {
  it(`should return a skuIjp03 preset when built for rest`, () => {
    const skuIjp03Preset = presets.restPreset().build();
    expect(skuIjp03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp03 preset when built for graphql`, () => {
    const skuIjp03Preset = presets.graphqlPreset().build();
    expect(skuIjp03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp03 preset when built for legacy rest`, () => {
    const skuIjp03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIjp03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp03 preset when built for legacy graphql`, () => {
    const skuIjp03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIjp03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
