import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sarmo-034';

describe(`with skuSarmo034 preset`, () => {
  it(`should return a skuSarmo034 preset when built for rest`, () => {
    const skuSarmo034Preset = presets.restPreset().build();
    expect(skuSarmo034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarmo034 preset when built for graphql`, () => {
    const skuSarmo034Preset = presets.graphqlPreset().build();
    expect(skuSarmo034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarmo034 preset when built for legacy rest`, () => {
    const skuSarmo034Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSarmo034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarmo034 preset when built for legacy graphql`, () => {
    const skuSarmo034Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSarmo034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARMO-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
