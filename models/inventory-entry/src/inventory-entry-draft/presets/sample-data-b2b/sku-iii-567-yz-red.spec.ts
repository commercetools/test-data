import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzRed from './sku-iii-567-yz-red';

describe(`with skuIii567YzRed preset`, () => {
  it(`should return a skuIii567YzRed preset`, () => {
    const skuIii567YzRedPreset = skuIii567YzRed().build<TInventoryEntryDraft>();
    expect(skuIii567YzRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzRed preset when built for graphql`, () => {
    const skuIii567YzRedPresetGraphql =
      skuIii567YzRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
