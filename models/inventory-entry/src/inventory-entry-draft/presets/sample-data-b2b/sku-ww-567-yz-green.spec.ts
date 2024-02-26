import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzGreen from './sku-ww-567-yz-green';

describe(`with skuWw567YzGreen preset`, () => {
  it(`should return a skuWw567YzGreen preset`, () => {
    const skuWw567YzGreenPreset =
      skuWw567YzGreen().build<TInventoryEntryDraft>();
    expect(skuWw567YzGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWw567YzGreen preset when built for graphql`, () => {
    const skuWw567YzGreenPresetGraphql =
      skuWw567YzGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
