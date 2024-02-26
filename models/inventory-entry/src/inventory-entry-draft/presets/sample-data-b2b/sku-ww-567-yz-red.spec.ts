import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzRed from './sku-ww-567-yz-red';

describe(`with skuWw567YzRed preset`, () => {
  it(`should return a skuWw567YzRed preset`, () => {
    const skuWw567YzRedPreset = skuWw567YzRed().build<TInventoryEntryDraft>();
    expect(skuWw567YzRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzRed preset when built for graphql`, () => {
    const skuWw567YzRedPresetGraphql =
      skuWw567YzRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
