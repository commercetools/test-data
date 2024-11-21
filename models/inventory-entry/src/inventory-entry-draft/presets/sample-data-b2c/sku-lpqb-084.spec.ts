import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lpqb-084';

describe(`with skuLpqb084 preset`, () => {
  it(`should return a skuLpqb084 preset when built for rest`, () => {
    const skuLpqb084Preset = presets.restPreset().build();
    expect(skuLpqb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpqb084 preset when built for graphql`, () => {
    const skuLpqb084Preset = presets.graphqlPreset().build();
    expect(skuLpqb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpqb084 preset when built for legacy rest`, () => {
    const skuLpqb084Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpqb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpqb084 preset when built for legacy graphql`, () => {
    const skuLpqb084Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpqb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPQB-084",
        "supplyChannel": undefined,
      }
    `);
  });
});
