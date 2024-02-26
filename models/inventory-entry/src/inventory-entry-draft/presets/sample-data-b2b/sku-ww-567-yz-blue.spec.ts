import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzBlue from './sku-ww-567-yz-blue';

describe(`with skuWw567YzBlue preset`, () => {
  it(`should return a skuWw567YzBlue preset`, () => {
    const skuWw567YzBluePreset = skuWw567YzBlue().build<TInventoryEntryDraft>();
    expect(skuWw567YzBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzBlue preset when built for graphql`, () => {
    const skuWw567YzBluePresetGraphql =
      skuWw567YzBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
