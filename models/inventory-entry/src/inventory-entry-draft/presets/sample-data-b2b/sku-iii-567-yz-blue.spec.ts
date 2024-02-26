import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzBlue from './sku-iii-567-yz-blue';

describe(`with skuIii567YzBlue preset`, () => {
  it(`should return a skuIii567YzBlue preset`, () => {
    const skuIii567YzBluePreset =
      skuIii567YzBlue().build<TInventoryEntryDraft>();
    expect(skuIii567YzBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzBlue preset when built for graphql`, () => {
    const skuIii567YzBluePresetGraphql =
      skuIii567YzBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
