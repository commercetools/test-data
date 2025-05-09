import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-gpc-01';

describe(`with skuGpc01 preset`, () => {
  it(`should return a skuGpc01 preset when built for rest`, () => {
    const skuGpc01Preset = presets.restPreset().build();
    expect(skuGpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 81,
        "restockableInDays": undefined,
        "sku": "GPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc01 preset when built for graphql`, () => {
    const skuGpc01Preset = presets.graphqlPreset().build();
    expect(skuGpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 81,
        "restockableInDays": undefined,
        "sku": "GPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc01 preset when built for legacy rest`, () => {
    const skuGpc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 81,
        "restockableInDays": undefined,
        "sku": "GPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc01 preset when built for legacy graphql`, () => {
    const skuGpc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 81,
        "restockableInDays": undefined,
        "sku": "GPC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
