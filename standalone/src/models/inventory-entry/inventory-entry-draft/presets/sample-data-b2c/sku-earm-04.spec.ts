import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-earm-04';

describe(`with skuEarm04 preset`, () => {
  it(`should return a skuEarm04 preset when built for rest`, () => {
    const skuEarm04Preset = presets.restPreset().build();
    expect(skuEarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEarm04 preset when built for graphql`, () => {
    const skuEarm04Preset = presets.graphqlPreset().build();
    expect(skuEarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEarm04 preset when built for legacy rest`, () => {
    const skuEarm04Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEarm04 preset when built for legacy graphql`, () => {
    const skuEarm04Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEarm04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });
});
