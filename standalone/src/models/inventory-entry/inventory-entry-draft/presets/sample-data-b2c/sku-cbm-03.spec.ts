import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cbm-03';

describe(`with skuCbm03 preset`, () => {
  it(`should return a skuCbm03 preset when built for rest`, () => {
    const skuCbm03Preset = presets.restPreset().build();
    expect(skuCbm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCbm03 preset when built for graphql`, () => {
    const skuCbm03Preset = presets.graphqlPreset().build();
    expect(skuCbm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCbm03 preset when built for legacy rest`, () => {
    const skuCbm03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCbm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCbm03 preset when built for legacy graphql`, () => {
    const skuCbm03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCbm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CBM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
