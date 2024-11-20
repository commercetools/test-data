import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccm-089';

describe(`with skuCcm089 preset`, () => {
  it(`should return a skuCcm089 preset when built for rest`, () => {
    const skuCcm089Preset = presets.restPreset().build();
    expect(skuCcm089Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcm089 preset when built for graphql`, () => {
    const skuCcm089Preset = presets.graphqlPreset().build();
    expect(skuCcm089Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcm089 preset when built for legacy rest`, () => {
    const skuCcm089Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcm089Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcm089 preset when built for legacy graphql`, () => {
    const skuCcm089Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcm089Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCM-089",
        "supplyChannel": undefined,
      }
    `);
  });
});
