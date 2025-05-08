import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-shot-095';

describe(`with skuShot095 preset`, () => {
  it(`should return a skuShot095 preset when built for rest`, () => {
    const skuShot095Preset = presets.restPreset().build();
    expect(skuShot095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SHOT-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuShot095 preset when built for graphql`, () => {
    const skuShot095Preset = presets.graphqlPreset().build();
    expect(skuShot095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SHOT-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuShot095 preset when built for legacy rest`, () => {
    const skuShot095Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuShot095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SHOT-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuShot095 preset when built for legacy graphql`, () => {
    const skuShot095Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuShot095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SHOT-095",
        "supplyChannel": undefined,
      }
    `);
  });
});
