import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-garm-093';

describe(`with skuGarm093 preset`, () => {
  it(`should return a skuGarm093 preset when built for rest`, () => {
    const skuGarm093Preset = presets.restPreset().build();
    expect(skuGarm093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGarm093 preset when built for graphql`, () => {
    const skuGarm093Preset = presets.graphqlPreset().build();
    expect(skuGarm093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGarm093 preset when built for legacy rest`, () => {
    const skuGarm093Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGarm093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGarm093 preset when built for legacy graphql`, () => {
    const skuGarm093Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGarm093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GARM-093",
        "supplyChannel": undefined,
      }
    `);
  });
});
