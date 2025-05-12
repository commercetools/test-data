import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cqb-09';

describe(`with skuCqb09 preset`, () => {
  it(`should return a skuCqb09 preset when built for rest`, () => {
    const skuCqb09Preset = presets.restPreset().build();
    expect(skuCqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCqb09 preset when built for graphql`, () => {
    const skuCqb09Preset = presets.graphqlPreset().build();
    expect(skuCqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCqb09 preset when built for legacy rest`, () => {
    const skuCqb09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCqb09 preset when built for legacy graphql`, () => {
    const skuCqb09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CQB-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
