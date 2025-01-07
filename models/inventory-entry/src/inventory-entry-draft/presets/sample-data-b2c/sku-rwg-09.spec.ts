import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rwg-09';

describe(`with skuRwg09 preset`, () => {
  it(`should return a skuRwg09 preset when built for rest`, () => {
    const skuRwg09Preset = presets.restPreset().build();
    expect(skuRwg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RWG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRwg09 preset when built for graphql`, () => {
    const skuRwg09Preset = presets.graphqlPreset().build();
    expect(skuRwg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RWG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRwg09 preset when built for legacy rest`, () => {
    const skuRwg09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRwg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RWG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRwg09 preset when built for legacy graphql`, () => {
    const skuRwg09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRwg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RWG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
