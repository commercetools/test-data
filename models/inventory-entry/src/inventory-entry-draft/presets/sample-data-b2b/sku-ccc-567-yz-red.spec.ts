import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzRed from './sku-ccc-567-yz-red';

describe(`with skuCcc567YzRed preset`, () => {
  it(`should return a skuCcc567YzRed preset`, () => {
    const skuCcc567YzRedPreset = skuCcc567YzRed().build<TInventoryEntryDraft>();
    expect(skuCcc567YzRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzRed preset when built for graphql`, () => {
    const skuCcc567YzRedPresetGraphql =
      skuCcc567YzRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
