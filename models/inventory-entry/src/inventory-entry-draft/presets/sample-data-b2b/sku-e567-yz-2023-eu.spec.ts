import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2023Eu from './sku-e567-yz-2023-eu';

describe(`with skuE567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuE567Yz2023Eu preset`, () => {
    const skuE567Yz2023EuPreset =
      skuE567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuE567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2023Eu preset when built for graphql`, () => {
    const skuE567Yz2023EuPresetGraphql =
      skuE567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
