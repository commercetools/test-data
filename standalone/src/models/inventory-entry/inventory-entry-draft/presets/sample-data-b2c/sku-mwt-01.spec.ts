import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mwt-01';

describe(`with skuMwt01 preset`, () => {
  it(`should return a skuMwt01 preset when built for rest`, () => {
    const skuMwt01Preset = presets.restPreset().build();
    expect(skuMwt01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMwt01 preset when built for graphql`, () => {
    const skuMwt01Preset = presets.graphqlPreset().build();
    expect(skuMwt01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMwt01 preset when built for legacy rest`, () => {
    const skuMwt01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMwt01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMwt01 preset when built for legacy graphql`, () => {
    const skuMwt01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMwt01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MWT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});
