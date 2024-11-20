import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccc-09';

describe(`with skuCcc09 preset`, () => {
  it(`should return a skuCcc09 preset when built for rest`, () => {
    const skuCcc09Preset = presets.restPreset().build();
    expect(skuCcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc09 preset when built for graphql`, () => {
    const skuCcc09Preset = presets.graphqlPreset().build();
    expect(skuCcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc09 preset when built for legacy rest`, () => {
    const skuCcc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc09 preset when built for legacy graphql`, () => {
    const skuCcc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
