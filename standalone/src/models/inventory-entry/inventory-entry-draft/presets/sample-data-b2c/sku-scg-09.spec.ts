import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-scg-09';

describe(`with skuScg09 preset`, () => {
  it(`should return a skuScg09 preset when built for rest`, () => {
    const skuScg09Preset = presets.restPreset().build();
    expect(skuScg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScg09 preset when built for graphql`, () => {
    const skuScg09Preset = presets.graphqlPreset().build();
    expect(skuScg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScg09 preset when built for legacy rest`, () => {
    const skuScg09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuScg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScg09 preset when built for legacy graphql`, () => {
    const skuScg09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuScg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
