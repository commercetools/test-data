import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ctss-0983';

describe(`with skuCtss0983 preset`, () => {
  it(`should return a skuCtss0983 preset when built for rest`, () => {
    const skuCtss0983Preset = presets.restPreset().build();
    expect(skuCtss0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss0983 preset when built for graphql`, () => {
    const skuCtss0983Preset = presets.graphqlPreset().build();
    expect(skuCtss0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss0983 preset when built for legacy rest`, () => {
    const skuCtss0983Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCtss0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss0983 preset when built for legacy graphql`, () => {
    const skuCtss0983Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCtss0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CTSS-0983",
        "supplyChannel": undefined,
      }
    `);
  });
});
