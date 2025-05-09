import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hp-01';

describe(`with skuHp01 preset`, () => {
  it(`should return a skuHp01 preset when built for rest`, () => {
    const skuHp01Preset = presets.restPreset().build();
    expect(skuHp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHp01 preset when built for graphql`, () => {
    const skuHp01Preset = presets.graphqlPreset().build();
    expect(skuHp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHp01 preset when built for legacy rest`, () => {
    const skuHp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHp01 preset when built for legacy graphql`, () => {
    const skuHp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
