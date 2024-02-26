import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2023 from './sku-y-567-yz-2023';

describe(`with skuY567Yz2023 preset`, () => {
  it(`should return a skuY567Yz2023 preset`, () => {
    const skuY567Yz2023Preset = skuY567Yz2023().build<TInventoryEntryDraft>();
    expect(skuY567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2023 preset when built for graphql`, () => {
    const skuY567Yz2023PresetGraphql =
      skuY567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
