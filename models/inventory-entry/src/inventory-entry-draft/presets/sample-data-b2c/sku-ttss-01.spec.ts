import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ttss-01';

describe(`with skuTtss01 preset`, () => {
  it(`should return a skuTtss01 preset when built for rest`, () => {
    const skuTtss01Preset = presets.restPreset().build();
    expect(skuTtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTtss01 preset when built for graphql`, () => {
    const skuTtss01Preset = presets.graphqlPreset().build();
    expect(skuTtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTtss01 preset when built for legacy rest`, () => {
    const skuTtss01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTtss01 preset when built for legacy graphql`, () => {
    const skuTtss01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
