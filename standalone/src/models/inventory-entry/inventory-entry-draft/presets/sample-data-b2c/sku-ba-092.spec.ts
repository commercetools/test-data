import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ba-092';

describe(`with skuBa092 preset`, () => {
  it(`should return a skuBa092 preset when built for rest`, () => {
    const skuBa092Preset = presets.restPreset().build();
    expect(skuBa092Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBa092 preset when built for graphql`, () => {
    const skuBa092Preset = presets.graphqlPreset().build();
    expect(skuBa092Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBa092 preset when built for legacy rest`, () => {
    const skuBa092Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBa092Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBa092 preset when built for legacy graphql`, () => {
    const skuBa092Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBa092Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "BA-092",
        "supplyChannel": undefined,
      }
    `);
  });
});
