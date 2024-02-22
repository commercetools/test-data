import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzGreen from './sku-ccc-567-yz-green';

describe(`with skuCcc567YzGreen preset`, () => {
  it(`should return a skuCcc567YzGreen preset`, () => {
    const skuCcc567YzGreenPreset =
      skuCcc567YzGreen().build<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzGreen preset when built for graphql`, () => {
    const skuCcc567YzGreenPresetGraphql =
      skuCcc567YzGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
