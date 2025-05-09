import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-alc-01';

describe(`with skuAlc01 preset`, () => {
  it(`should return a skuAlc01 preset when built for rest`, () => {
    const skuAlc01Preset = presets.restPreset().build();
    expect(skuAlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlc01 preset when built for graphql`, () => {
    const skuAlc01Preset = presets.graphqlPreset().build();
    expect(skuAlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlc01 preset when built for legacy rest`, () => {
    const skuAlc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlc01 preset when built for legacy graphql`, () => {
    const skuAlc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 73,
        "restockableInDays": undefined,
        "sku": "ALC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
