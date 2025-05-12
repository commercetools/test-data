import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ec-0993';

describe(`with skuEc0993 preset`, () => {
  it(`should return a skuEc0993 preset when built for rest`, () => {
    const skuEc0993Preset = presets.restPreset().build();
    expect(skuEc0993Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEc0993 preset when built for graphql`, () => {
    const skuEc0993Preset = presets.graphqlPreset().build();
    expect(skuEc0993Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEc0993 preset when built for legacy rest`, () => {
    const skuEc0993Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEc0993Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEc0993 preset when built for legacy graphql`, () => {
    const skuEc0993Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEc0993Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EC-0993",
        "supplyChannel": undefined,
      }
    `);
  });
});
