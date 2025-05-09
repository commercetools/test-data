import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-br-0983';

describe(`with skuBr0983 preset`, () => {
  it(`should return a skuBr0983 preset when built for rest`, () => {
    const skuBr0983Preset = presets.restPreset().build();
    expect(skuBr0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBr0983 preset when built for graphql`, () => {
    const skuBr0983Preset = presets.graphqlPreset().build();
    expect(skuBr0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBr0983 preset when built for legacy rest`, () => {
    const skuBr0983Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBr0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBr0983 preset when built for legacy graphql`, () => {
    const skuBr0983Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBr0983Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "BR-0983",
        "supplyChannel": undefined,
      }
    `);
  });
});
