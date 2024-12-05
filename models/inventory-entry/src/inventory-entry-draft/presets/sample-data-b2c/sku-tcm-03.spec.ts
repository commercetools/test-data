import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tcm-03';

describe(`with skuTcm03 preset`, () => {
  it(`should return a skuTcm03 preset when built for rest`, () => {
    const skuTcm03Preset = presets.restPreset().build();
    expect(skuTcm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTcm03 preset when built for graphql`, () => {
    const skuTcm03Preset = presets.graphqlPreset().build();
    expect(skuTcm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTcm03 preset when built for legacy rest`, () => {
    const skuTcm03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTcm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTcm03 preset when built for legacy graphql`, () => {
    const skuTcm03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTcm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "TCM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});
