import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2023 from './sku-x-456-yz-2023';

describe(`with skuX456Yz2023 preset`, () => {
  it(`should return a skuX456Yz2023 preset`, () => {
    const skuX456Yz2023Preset = skuX456Yz2023().build<TInventoryEntryDraft>();
    expect(skuX456Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2023 preset when built for graphql`, () => {
    const skuX456Yz2023PresetGraphql =
      skuX456Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
