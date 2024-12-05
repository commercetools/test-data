import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-isp-01';

describe(`with skuIsp01 preset`, () => {
  it(`should return a skuIsp01 preset when built for rest`, () => {
    const skuIsp01Preset = presets.restPreset().build();
    expect(skuIsp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ISP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIsp01 preset when built for graphql`, () => {
    const skuIsp01Preset = presets.graphqlPreset().build();
    expect(skuIsp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ISP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIsp01 preset when built for legacy rest`, () => {
    const skuIsp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIsp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ISP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIsp01 preset when built for legacy graphql`, () => {
    const skuIsp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIsp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ISP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
