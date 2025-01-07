import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-arg-56-channel';

describe(`with skuArg56 preset`, () => {
  it(`should return a skuArg56 preset when built for rest`, () => {
    const skuArg56Preset = presets.restPreset().build();
    expect(skuArg56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuArg56 preset when built for graphql`, () => {
    const skuArg56Preset = presets.graphqlPreset().build();
    expect(skuArg56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuArg56 preset when built for legacy rest`, () => {
    const skuArg56Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuArg56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuArg56 preset when built for legacy graphql`, () => {
    const skuArg56Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuArg56Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ARG-56",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});
