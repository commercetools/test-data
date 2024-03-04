import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2023Eu from './sku-k567-yz-2023-eu';

describe(`with skuK567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuK567Yz2023Eu preset`, () => {
    const skuK567Yz2023EuPreset =
      skuK567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuK567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2023Eu preset when built for graphql`, () => {
    const skuK567Yz2023EuPresetGraphql =
      skuK567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
