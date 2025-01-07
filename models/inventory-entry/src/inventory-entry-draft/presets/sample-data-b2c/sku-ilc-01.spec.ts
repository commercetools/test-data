import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ilc-01';

describe(`with skuIlc01 preset`, () => {
  it(`should return a skuIlc01 preset when built for rest`, () => {
    const skuIlc01Preset = presets.restPreset().build();
    expect(skuIlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ILC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIlc01 preset when built for graphql`, () => {
    const skuIlc01Preset = presets.graphqlPreset().build();
    expect(skuIlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ILC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIlc01 preset when built for legacy rest`, () => {
    const skuIlc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ILC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIlc01 preset when built for legacy graphql`, () => {
    const skuIlc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIlc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ILC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
