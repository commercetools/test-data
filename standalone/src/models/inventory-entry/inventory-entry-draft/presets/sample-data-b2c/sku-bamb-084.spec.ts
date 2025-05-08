import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bamb-084';

describe(`with skuBamb084 preset`, () => {
  it(`should return a skuBamb084 preset when built for rest`, () => {
    const skuBamb084Preset = presets.restPreset().build();
    expect(skuBamb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBamb084 preset when built for graphql`, () => {
    const skuBamb084Preset = presets.graphqlPreset().build();
    expect(skuBamb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBamb084 preset when built for legacy rest`, () => {
    const skuBamb084Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBamb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBamb084 preset when built for legacy graphql`, () => {
    const skuBamb084Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBamb084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });
});
