import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ipc-09';

describe(`with skuIpc09 preset`, () => {
  it(`should return a skuIpc09 preset when built for rest`, () => {
    const skuIpc09Preset = presets.restPreset().build();
    expect(skuIpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIpc09 preset when built for graphql`, () => {
    const skuIpc09Preset = presets.graphqlPreset().build();
    expect(skuIpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIpc09 preset when built for legacy rest`, () => {
    const skuIpc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIpc09 preset when built for legacy graphql`, () => {
    const skuIpc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "IPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});
