import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iqb-09';

describe(`with skuIqb09 preset`, () => {
  it(`should return a skuIqb09 preset when built for rest`, () => {
    const skuIqb09Preset = presets.restPreset().build();
    expect(skuIqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIqb09 preset when built for graphql`, () => {
    const skuIqb09Preset = presets.graphqlPreset().build();
    expect(skuIqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIqb09 preset when built for legacy rest`, () => {
    const skuIqb09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIqb09 preset when built for legacy graphql`, () => {
    const skuIqb09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIqb09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IQB-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
