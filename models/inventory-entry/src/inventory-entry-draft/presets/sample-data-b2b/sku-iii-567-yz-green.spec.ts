import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzGreen from './sku-iii-567-yz-green';

describe(`with skuIii567YzGreen preset`, () => {
  it(`should return a skuIii567YzGreen preset`, () => {
    const skuIii567YzGreenPreset =
      skuIii567YzGreen().build<TInventoryEntryDraft>();
    expect(skuIii567YzGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIii567YzGreen preset when built for graphql`, () => {
    const skuIii567YzGreenPresetGraphql =
      skuIii567YzGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
