import type { TInventoryEntryDraft } from '../../../types';
import skuBrakePadSet from './sku-brake-pad-set';

describe(`with skuBrakePadSet preset`, () => {
  it(`should return a skuBrakePadSet preset`, () => {
    const skuBrakePadSetPreset = skuBrakePadSet().build<TInventoryEntryDraft>();
    expect(skuBrakePadSetPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBrakePadSet preset when built for graphql`, () => {
    const skuBrakePadSetPresetGraphql =
      skuBrakePadSet().buildGraphql<TInventoryEntryDraft>();
    expect(skuBrakePadSetPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": undefined,
      }
    `);
  });
});
