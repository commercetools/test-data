import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rcc-09';

describe(`with skuRcc09 preset`, () => {
  it(`should return a skuRcc09 preset when built for rest`, () => {
    const skuRcc09Preset = presets.restPreset().build();
    expect(skuRcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcc09 preset when built for graphql`, () => {
    const skuRcc09Preset = presets.graphqlPreset().build();
    expect(skuRcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcc09 preset when built for legacy rest`, () => {
    const skuRcc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcc09 preset when built for legacy graphql`, () => {
    const skuRcc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RCC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
