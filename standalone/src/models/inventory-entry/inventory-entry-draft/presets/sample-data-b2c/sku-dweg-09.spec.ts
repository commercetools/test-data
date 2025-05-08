import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-dweg-09';

describe(`with skuDweg09 preset`, () => {
  it(`should return a skuDweg09 preset when built for rest`, () => {
    const skuDweg09Preset = presets.restPreset().build();
    expect(skuDweg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDweg09 preset when built for graphql`, () => {
    const skuDweg09Preset = presets.graphqlPreset().build();
    expect(skuDweg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDweg09 preset when built for legacy rest`, () => {
    const skuDweg09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDweg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDweg09 preset when built for legacy graphql`, () => {
    const skuDweg09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDweg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "DWEG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
