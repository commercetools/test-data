import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mr-05';

describe(`with skuMr05 preset`, () => {
  it(`should return a skuMr05 preset when built for rest`, () => {
    const skuMr05Preset = presets.restPreset().build();
    expect(skuMr05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr05 preset when built for graphql`, () => {
    const skuMr05Preset = presets.graphqlPreset().build();
    expect(skuMr05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr05 preset when built for legacy rest`, () => {
    const skuMr05Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMr05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr05 preset when built for legacy graphql`, () => {
    const skuMr05Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMr05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-05",
        "supplyChannel": undefined,
      }
    `);
  });
});
