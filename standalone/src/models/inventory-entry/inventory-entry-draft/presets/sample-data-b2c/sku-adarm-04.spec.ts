import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-adarm-04';

describe(`with skuAdarm04 preset`, () => {
  it(`should return a skuAdarm04 preset when built for rest`, () => {
    const skuAdarm04Preset = presets.restPreset().build();
    expect(skuAdarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdarm04 preset when built for graphql`, () => {
    const skuAdarm04Preset = presets.graphqlPreset().build();
    expect(skuAdarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdarm04 preset when built for legacy rest`, () => {
    const skuAdarm04Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdarm04 preset when built for legacy graphql`, () => {
    const skuAdarm04Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADARM-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
