import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ctss-098';

describe(`with skuCtss098 preset`, () => {
  it(`should return a skuCtss098 preset when built for rest`, () => {
    const skuCtss098Preset = presets.restPreset().build();
    expect(skuCtss098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CTSS-098",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss098 preset when built for graphql`, () => {
    const skuCtss098Preset = presets.graphqlPreset().build();
    expect(skuCtss098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CTSS-098",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss098 preset when built for legacy rest`, () => {
    const skuCtss098Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCtss098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CTSS-098",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCtss098 preset when built for legacy graphql`, () => {
    const skuCtss098Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCtss098Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "CTSS-098",
        "supplyChannel": undefined,
      }
    `);
  });
});
