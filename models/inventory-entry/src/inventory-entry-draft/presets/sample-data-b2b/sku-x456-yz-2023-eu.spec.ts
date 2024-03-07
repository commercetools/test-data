import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2023Eu from './sku-x456-yz-2023-eu';

describe(`with skuX456Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX456Yz2023Eu preset`, () => {
    const skuX456Yz2023EuPreset =
      skuX456Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuX456Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2023Eu preset when built for graphql`, () => {
    const skuX456Yz2023EuPresetGraphql =
      skuX456Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
