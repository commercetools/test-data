import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2015 from './sku-k-567-yz-2015';

describe(`with skuK567Yz2015 preset`, () => {
  it(`should return a skuK567Yz2015 preset`, () => {
    const skuK567Yz2015Preset = skuK567Yz2015().build<TInventoryEntryDraft>();
    expect(skuK567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2015 preset when built for graphql`, () => {
    const skuK567Yz2015PresetGraphql =
      skuK567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
