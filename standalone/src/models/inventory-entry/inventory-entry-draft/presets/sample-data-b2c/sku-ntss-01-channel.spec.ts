import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-01-channel';

describe(`with skuNtss01 preset`, () => {
  it(`should return a skuNtss01 preset when built for rest`, () => {
    const skuNtss01Preset = presets.restPreset().build();
    expect(skuNtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNtss01 preset when built for graphql`, () => {
    const skuNtss01Preset = presets.graphqlPreset().build();
    expect(skuNtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNtss01 preset when built for legacy rest`, () => {
    const skuNtss01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNtss01 preset when built for legacy graphql`, () => {
    const skuNtss01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
