import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-wtp-09';

describe(`with skuWtp09 preset`, () => {
  it(`should return a skuWtp09 preset when built for rest`, () => {
    const skuWtp09Preset = presets.restPreset().build();
    expect(skuWtp09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWtp09 preset when built for graphql`, () => {
    const skuWtp09Preset = presets.graphqlPreset().build();
    expect(skuWtp09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWtp09 preset when built for legacy rest`, () => {
    const skuWtp09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWtp09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWtp09 preset when built for legacy graphql`, () => {
    const skuWtp09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWtp09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
