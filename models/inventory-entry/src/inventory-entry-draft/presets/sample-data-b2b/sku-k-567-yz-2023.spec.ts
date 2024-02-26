import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2023 from './sku-k-567-yz-2023';

describe(`with skuK567Yz2023 preset`, () => {
  it(`should return a skuK567Yz2023 preset`, () => {
    const skuK567Yz2023Preset = skuK567Yz2023().build<TInventoryEntryDraft>();
    expect(skuK567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2023 preset when built for graphql`, () => {
    const skuK567Yz2023PresetGraphql =
      skuK567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
