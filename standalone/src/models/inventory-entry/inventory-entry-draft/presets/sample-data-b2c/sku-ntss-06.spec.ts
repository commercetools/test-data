import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-06';

describe(`with skuNtss06 preset`, () => {
  it(`should return a skuNtss06 preset when built for rest`, () => {
    const skuNtss06Preset = presets.restPreset().build();
    expect(skuNtss06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss06 preset when built for graphql`, () => {
    const skuNtss06Preset = presets.graphqlPreset().build();
    expect(skuNtss06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss06 preset when built for legacy rest`, () => {
    const skuNtss06Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss06 preset when built for legacy graphql`, () => {
    const skuNtss06Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-06",
        "supplyChannel": undefined,
      }
    `);
  });
});
