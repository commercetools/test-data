import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pmap-01';

describe(`with skuPmap01 preset`, () => {
  it(`should return a skuPmap01 preset when built for rest`, () => {
    const skuPmap01Preset = presets.restPreset().build();
    expect(skuPmap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPmap01 preset when built for graphql`, () => {
    const skuPmap01Preset = presets.graphqlPreset().build();
    expect(skuPmap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPmap01 preset when built for legacy rest`, () => {
    const skuPmap01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPmap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPmap01 preset when built for legacy graphql`, () => {
    const skuPmap01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPmap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 91,
        "restockableInDays": undefined,
        "sku": "PMAP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
