import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ijp-04';

describe(`with skuIjp04 preset`, () => {
  it(`should return a skuIjp04 preset when built for rest`, () => {
    const skuIjp04Preset = presets.restPreset().build();
    expect(skuIjp04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp04 preset when built for graphql`, () => {
    const skuIjp04Preset = presets.graphqlPreset().build();
    expect(skuIjp04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp04 preset when built for legacy rest`, () => {
    const skuIjp04Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIjp04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIjp04 preset when built for legacy graphql`, () => {
    const skuIjp04Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIjp04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IJP-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
