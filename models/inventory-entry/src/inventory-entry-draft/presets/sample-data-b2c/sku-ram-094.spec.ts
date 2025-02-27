import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ram-094';

describe(`with skuRam094 preset`, () => {
  it(`should return a skuRam094 preset when built for rest`, () => {
    const skuRam094Preset = presets.restPreset().build();
    expect(skuRam094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RAM-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRam094 preset when built for graphql`, () => {
    const skuRam094Preset = presets.graphqlPreset().build();
    expect(skuRam094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RAM-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRam094 preset when built for legacy rest`, () => {
    const skuRam094Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRam094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RAM-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRam094 preset when built for legacy graphql`, () => {
    const skuRam094Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRam094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RAM-094",
        "supplyChannel": undefined,
      }
    `);
  });
});
