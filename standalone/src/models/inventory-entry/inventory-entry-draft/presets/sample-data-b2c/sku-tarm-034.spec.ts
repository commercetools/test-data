import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tarm-034';

describe(`with skuTarm034 preset`, () => {
  it(`should return a skuTarm034 preset when built for rest`, () => {
    const skuTarm034Preset = presets.restPreset().build();
    expect(skuTarm034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm034 preset when built for graphql`, () => {
    const skuTarm034Preset = presets.graphqlPreset().build();
    expect(skuTarm034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm034 preset when built for legacy rest`, () => {
    const skuTarm034Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTarm034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm034 preset when built for legacy graphql`, () => {
    const skuTarm034Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTarm034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-034",
        "supplyChannel": undefined,
      }
    `);
  });
});
