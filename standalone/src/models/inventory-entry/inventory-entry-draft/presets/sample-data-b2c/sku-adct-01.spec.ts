import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-adct-01';

describe(`with skuAdct01 preset`, () => {
  it(`should return a skuAdct01 preset when built for rest`, () => {
    const skuAdct01Preset = presets.restPreset().build();
    expect(skuAdct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdct01 preset when built for graphql`, () => {
    const skuAdct01Preset = presets.graphqlPreset().build();
    expect(skuAdct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdct01 preset when built for legacy rest`, () => {
    const skuAdct01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdct01 preset when built for legacy graphql`, () => {
    const skuAdct01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 90,
        "restockableInDays": undefined,
        "sku": "ADCT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
