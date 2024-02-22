import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2015 from './sku-x-456-yz-2015';

describe(`with skuX456Yz2015 preset`, () => {
  it(`should return a skuX456Yz2015 preset`, () => {
    const skuX456Yz2015Preset = skuX456Yz2015().build<TInventoryEntryDraft>();
    expect(skuX456Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX456Yz2015 preset when built for graphql`, () => {
    const skuX456Yz2015PresetGraphql =
      skuX456Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
