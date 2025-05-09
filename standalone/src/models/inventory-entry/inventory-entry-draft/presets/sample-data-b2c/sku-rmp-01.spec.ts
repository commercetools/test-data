import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rmp-01';

describe(`with skuRmp01 preset`, () => {
  it(`should return a skuRmp01 preset when built for rest`, () => {
    const skuRmp01Preset = presets.restPreset().build();
    expect(skuRmp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRmp01 preset when built for graphql`, () => {
    const skuRmp01Preset = presets.graphqlPreset().build();
    expect(skuRmp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRmp01 preset when built for legacy rest`, () => {
    const skuRmp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRmp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRmp01 preset when built for legacy graphql`, () => {
    const skuRmp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRmp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
