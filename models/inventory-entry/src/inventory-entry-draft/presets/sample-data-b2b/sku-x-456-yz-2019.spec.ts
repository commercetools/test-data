import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2019 from './sku-x-456-yz-2019';

describe(`with skuX456Yz2019 preset`, () => {
  it(`should return a skuX456Yz2019 preset`, () => {
    const skuX456Yz2019Preset = skuX456Yz2019().build<TInventoryEntryDraft>();
    expect(skuX456Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2019 preset when built for graphql`, () => {
    const skuX456Yz2019PresetGraphql =
      skuX456Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
