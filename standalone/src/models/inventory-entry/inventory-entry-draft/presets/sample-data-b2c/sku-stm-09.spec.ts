import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-stm-09';

describe(`with skuStm09 preset`, () => {
  it(`should return a skuStm09 preset when built for rest`, () => {
    const skuStm09Preset = presets.restPreset().build();
    expect(skuStm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStm09 preset when built for graphql`, () => {
    const skuStm09Preset = presets.graphqlPreset().build();
    expect(skuStm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStm09 preset when built for legacy rest`, () => {
    const skuStm09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStm09 preset when built for legacy graphql`, () => {
    const skuStm09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STM-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
