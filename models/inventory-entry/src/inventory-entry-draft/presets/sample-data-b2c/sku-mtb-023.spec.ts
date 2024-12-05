import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mtb-023';

describe(`with skuMtb023 preset`, () => {
  it(`should return a skuMtb023 preset when built for rest`, () => {
    const skuMtb023Preset = presets.restPreset().build();
    expect(skuMtb023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtb023 preset when built for graphql`, () => {
    const skuMtb023Preset = presets.graphqlPreset().build();
    expect(skuMtb023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtb023 preset when built for legacy rest`, () => {
    const skuMtb023Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMtb023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtb023 preset when built for legacy graphql`, () => {
    const skuMtb023Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMtb023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MTB-023",
        "supplyChannel": undefined,
      }
    `);
  });
});
