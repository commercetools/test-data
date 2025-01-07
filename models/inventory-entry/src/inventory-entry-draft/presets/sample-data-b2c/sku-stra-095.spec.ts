import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-stra-095';

describe(`with skuStra095 preset`, () => {
  it(`should return a skuStra095 preset when built for rest`, () => {
    const skuStra095Preset = presets.restPreset().build();
    expect(skuStra095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStra095 preset when built for graphql`, () => {
    const skuStra095Preset = presets.graphqlPreset().build();
    expect(skuStra095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStra095 preset when built for legacy rest`, () => {
    const skuStra095Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStra095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStra095 preset when built for legacy graphql`, () => {
    const skuStra095Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStra095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });
});
