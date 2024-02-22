import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2019 from './sku-k-567-yz-2019';

describe(`with skuK567Yz2019 preset`, () => {
  it(`should return a skuK567Yz2019 preset`, () => {
    const skuK567Yz2019Preset = skuK567Yz2019().build<TInventoryEntryDraft>();
    expect(skuK567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2019 preset when built for graphql`, () => {
    const skuK567Yz2019PresetGraphql =
      skuK567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
