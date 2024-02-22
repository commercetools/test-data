import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzBlue from './sku-ccc-567-yz-blue';

describe(`with skuCcc567YzBlue preset`, () => {
  it(`should return a skuCcc567YzBlue preset`, () => {
    const skuCcc567YzBluePreset =
      skuCcc567YzBlue().build<TInventoryEntryDraft>();
    expect(skuCcc567YzBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzBlue preset when built for graphql`, () => {
    const skuCcc567YzBluePresetGraphql =
      skuCcc567YzBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
