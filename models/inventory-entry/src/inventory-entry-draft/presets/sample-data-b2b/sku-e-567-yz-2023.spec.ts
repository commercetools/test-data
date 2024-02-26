import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2023 from './sku-e-567-yz-2023';

describe(`with skuE567Yz2023 preset`, () => {
  it(`should return a skuE567Yz2023 preset`, () => {
    const skuE567Yz2023Preset = skuE567Yz2023().build<TInventoryEntryDraft>();
    expect(skuE567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2023 preset when built for graphql`, () => {
    const skuE567Yz2023PresetGraphql =
      skuE567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
