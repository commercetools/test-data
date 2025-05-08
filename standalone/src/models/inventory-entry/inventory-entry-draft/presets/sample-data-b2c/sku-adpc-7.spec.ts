import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-adpc-7';

describe(`with skuAdpc7 preset`, () => {
  it(`should return a skuAdpc7 preset when built for rest`, () => {
    const skuAdpc7Preset = presets.restPreset().build();
    expect(skuAdpc7Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc7 preset when built for graphql`, () => {
    const skuAdpc7Preset = presets.graphqlPreset().build();
    expect(skuAdpc7Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc7 preset when built for legacy rest`, () => {
    const skuAdpc7Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdpc7Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc7 preset when built for legacy graphql`, () => {
    const skuAdpc7Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdpc7Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-7",
        "supplyChannel": undefined,
      }
    `);
  });
});
